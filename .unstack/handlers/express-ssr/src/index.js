import server from "./server";
const util = require("util");
const nonPromiseExec = require("child_process").exec;
const exec = util.promisify(require("child_process").exec);
const path = require("path");
const fs = require("fs");
const yaml = require("write-yaml");
const { hashElement } = require("folder-hash");

const wrapComponent = helper => {
  const context = helper.getContext();
  const serviceDescriptor = helper.getServiceDescriptor();
  const serviceName = helper.getServiceName();

  return {
    start: async () => {
      const component = await helper.getComponent();
      const appFolder = helper.getWorkingDirectoryPath();
      const handlerLocation = helper.getHandlerLocation();
      const componentLocation = helper.getComponentLocation();

      await exec(`cp -R ${handlerLocation}/* ${appFolder}`, {
        cwd: process.cwd()
      });

      await exec(`cp -R ${handlerLocation}/.babelrc ${appFolder}/.babelrc`, {
        cwd: process.cwd()
      });

      try {
        const babelFile = await exec("mkdir -p dist", {
          cwd: appFolder,
          maxBuffer: 1024 * 500
        });
        console.log(babelFile.stdout);
        console.log(babelFile.stderr);
      } catch (e) {
        console.log(e);
      }

      try {
        console.log(
          await exec("npm install", {
            cwd: `${appFolder}/component`,
            maxBuffer: 1024 * 700
          })
        );
      } catch (e) {
        console.log(e);
      }

      try {
        await new Promise((resolve, reject) => {
          const child = nonPromiseExec("CI=false npm run build", {
            cwd: `${appFolder}/component`,
            maxBuffer: 1024 * 700
          });

          child.stdout.pipe(process.stdout);
          child.stderr.pipe(process.stdout);
          child.on("exit", code => {
            resolve();
          });
        });
      } catch (e) {
        console.log(e);
      }

      await exec(`rm -rf ./component/node_modules`, {
        cwd: appFolder,
        maxBuffer: 1024 * 500
      });
      await exec(
        `mv ./component/build/index.html ./component/build/template.html`,
        {
          cwd: appFolder,
          maxBuffer: 1024 * 500
        }
      );

      const HEADER_FRAGMENT = fs.readFileSync(
        appFolder + "/component/layout/_header.html",
        {
          encoding: "utf-8"
        }
      );

      try {
        server(component.app, {
          API_ENDPOINT: "http://localhost:4000",
          BUNDLE_DIRECTORY: appFolder,
          PUBLIC_DIRECTORY: `${appFolder}/component/build`,
          apolloLinks: component.options.apolloLinks,
          serverRoutes: component.options.serverRoutes,
          HEADER_FRAGMENT,
          ENTRY: require(`${path.resolve(
            process.cwd(),
            `${appFolder}/component/src/isomorphic-entry`
          )}`).default
        });
      } catch (e) {
        console.log(e);
      }
    },
    deploy: () => {
      return new Promise(async (resolve, reject) => {
        const awsRegion = process.env.AWS_REGION;

        const component = await helper.getComponent();
        const appFolder = helper.getWorkingDirectoryPath();
        const handlerLocation = helper.getHandlerLocation();
        const componentLocation = helper.getComponentLocation();
        const [babelBuilder] = await helper.getBuilders();
        const runtime = await helper.getRuntime();

        // BEGIN fill in Dockfile
        const dockerFileString = fs.readFileSync(
          handlerLocation + "/Dockerfile",
          {
            encoding: "utf-8"
          }
        );

        //this is CK specific!

        let endpointValue = process.env.API_ENDPOINT;

        //END this is CK specific!

        const apiEndpoint = {
          key: "API_ENDPOINT",
          value: endpointValue
        };

        const hash = await hashElement(`${appFolder}/entry.unstack.js`, {});

        const bundleFilename = `entry-${hash.hash}.js`;

        const bundleDirectory = {
          key: "BUNDLE_DIRECTORY",
          value: `./`
        };

        const publicDirectory = {
          key: "PUBLIC_DIRECTORY",
          value: "./component/build"
        };

        const headerFragmentPath = {
          key: "HEADER_FRAGMENT_PATH",
          value: `./component/layout/_header.html`
        };

        const evaluatedDockerfileString = [
          apiEndpoint,
          publicDirectory,
          bundleDirectory,
          headerFragmentPath
        ].reduce((result, variable) => {
          return result.replace(`{{${variable.key}}}`, `"${variable.value}"`);
        }, dockerFileString);

        fs.writeFileSync(
          appFolder + "/Dockerfile",
          evaluatedDockerfileString,
          "utf-8"
        );
        // END fill in Dockerfile

        // BEGIN ORCHESTRATION

        try {
          console.log(
            await exec("npm install", {
              cwd: `${appFolder}/component`,
              maxBuffer: 1024 * 700
            })
          );
        } catch (e) {
          console.log(e);
        }

        try {
          await new Promise((resolve, reject) => {
            const child = nonPromiseExec("CI=false npm run build", {
              cwd: `${appFolder}/component`,
              maxBuffer: 1024 * 700
            });

            child.stdout.pipe(process.stdout);
            child.stderr.pipe(process.stdout);
            child.on("exit", code => {
              resolve();
            });
          });
        } catch (e) {
          console.log(e);
        }

        await exec(`rm -rf ./component/node_modules`, {
          cwd: appFolder,
          maxBuffer: 1024 * 500
        });
        await exec(
          `mv ./component/build/index.html ./component/build/template.html`,
          {
            cwd: appFolder,
            maxBuffer: 1024 * 500
          }
        );

        await babelBuilder.process({
          cwd: appFolder,
          additionalTransforms: [
            { from: "server.unstack.js", to: "server.js" }
          ],
          hasSrc: true
        });

        const { cname } = await runtime.createOrUpdate({
          serviceName,
          awsRegion,
          appFolder,
          environmentName: context.environment.name,
          branchName: context.branch.name
        });

        // resolve with outputs
        const outputs = {
          endpoint: cname
        };
        resolve(outputs);
      });
    }
  };
};

module.exports = {
  wrapComponent
};
