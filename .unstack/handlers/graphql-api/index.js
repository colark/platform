import { gql } from "apollo-server-express";
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const path = require("path");
const fs = require("fs");
const yaml = require("write-yaml");
const glob = require("glob");
import launchServer from "./serverLauncher";

const wrapComponent = helper => {
  const context = helper.getContext();
  const serviceDescriptor = helper.getServiceDescriptor();
  const serviceName = helper.getServiceName();

  const build = () => {};

  return {
    start: async () => {
      const { makeConfig } = await helper.getComponent();
      const appFolder = helper.getWorkingDirectoryPath();
      const handlerLocation = helper.getHandlerLocation();
      const componentLocation = helper.getComponentLocation();

      launchServer(await makeConfig(context));
    },
    test: config => {},
    provideContext: async config => {
      return new Promise(async (resolve, reject) => {
        const componentLocation = config.service.location;
        resolve({
          location: `${process.cwd()}/${componentLocation}`
        });
      });
    },
    build,
    deploy: async () => {
      return new Promise(async (resolve, reject) => {
        const awsRegion = process.env.AWS_REGION;

        const appFolder = helper.getWorkingDirectoryPath();
        const handlerLocation = helper.getHandlerLocation();
        const componentLocation = helper.getComponentLocation();
        const [babelBuilder] = await helper.getBuilders();
        const runtime = await helper.getRuntime();

        // BEGIN fill in Dockfile
        const dockerfileString = fs.readFileSync(
          handlerLocation + "/Dockerfile",
          {
            encoding: "utf-8"
          }
        );

        const envKeys = ["ENVIRONMENT", "DATABASE_URL"];

        const notFound = [];

        const dynamicEnvString = envKeys.reduce((result, key) => {
          const envSpecificValue =
            process.env[`${context.environment.name.toUpperCase()}_${key}`];
          const value = envSpecificValue ? envSpecificValue : process.env[key];
          if (value) {
            result += `ENV ${key}=${value} \n`;
          } else {
            notFound.push(key);
          }
          return result;
        }, "");

        if (notFound.length) {
          throw new Error(
            `Environment: ${context.environment.name.toUpperCase()} - Missing these env variables for: ${notFound.join(
              ","
            )}`
          );
        }

        const dynamicEnvVars = {
          key: "DYNAMIC_ENV_VARS",
          value: dynamicEnvString
        };

        const evaluatedDockerfileString = [dynamicEnvVars].reduce(
          (result, variable) => {
            return result.replace(`{{${variable.key}}}`, variable.value);
          },
          dockerfileString
        );

        fs.writeFileSync(
          appFolder + "/Dockerfile",
          evaluatedDockerfileString,
          "utf-8"
        );

        await babelBuilder.process({
          cwd: appFolder,
          additionalTransforms: [
            { from: "entry.unstack.js", to: "entry.js" },
            { from: "serverLauncher.js", to: "serverLauncher.compiled.js" }
          ]
        });

        const { cname } = await runtime.createOrUpdate({
          serviceName,
          awsRegion,
          appFolder,
          environmentName: context.environment.name,
          branchName: context.branch.name,
          includeServiceInEnvName: false
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
