import server from './server';
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const path = require('path');
const fs = require('fs');
const yaml = require('write-yaml');
const { hashElement } = require('folder-hash');

const wrapComponent = (component, context) => {
  return {
    start: async (config) => {
      const serviceName = config.service.name;

      const handlerLocation = config.handler.location;
      const componentLocation = `./${config.service.location}`;
      const appFolder = `./.unstack/tmp/artifacts/start/${serviceName}`;

      //build tmp docker app folder
      const buildBundleFolderCommand = `mkdir -p ${appFolder}`;
      const buildBundleFolder = await exec(buildBundleFolderCommand, { cwd: process.cwd() });

      await exec(`cp -R ${handlerLocation}/* ${appFolder}`, {
        cwd: process.cwd()
      });

      await exec(`cp -R ${handlerLocation}/.babelrc ${appFolder}/.babelrc`, {
        cwd: process.cwd()
      });

      await exec(`rm -rf ${appFolder}/component`, { cwd: process.cwd() });
      await exec(`cp -rf ${componentLocation}/. ${appFolder}/component`, { cwd: process.cwd() });

      const handlerPackageJson = JSON.parse(
        fs.readFileSync(handlerLocation + '/package.json', { encoding: 'utf-8' })
      );

      // to get es6 goodness via babel
      const serviceDependencies = JSON.parse(
        fs.readFileSync(handlerLocation + '/service-dependencies.json', { encoding: 'utf-8' })
      );

      const componentPackageJson = JSON.parse(
        fs.readFileSync(componentLocation + '/package.json', { encoding: 'utf-8' })
      );

      // merge package.json dependencies in place with handler dependencies
      componentPackageJson.dependencies = Object.assign(
        {},
        handlerPackageJson.dependencies,
        componentPackageJson.dependencies,
        serviceDependencies
      );

      fs.writeFileSync(appFolder + '/package.json', JSON.stringify(componentPackageJson), 'utf-8');

      try {
        const babelFile = await exec('parcel build entry.unstack.js', {
          cwd: appFolder,
          maxBuffer: 1024 * 500
        });
        console.log(babelFile.stdout);
        console.log(babelFile.stderr);
      } catch (e) {
        console.log(e);
      }

      const HEADER_FRAGMENT = fs.readFileSync(appFolder + '/component/layout/_header.html', {
        encoding: 'utf-8'
      });

      try {
        server(component.app, {
          API_ENDPOINT: 'http://localhost:4000',
          BUNDLE_PATH: 'dist/entry.unstack.js',
          BUNDLE_DIRECTORY: appFolder,
          PUBLIC_DIRECTORY: `${appFolder}/component/public`,
          apolloLinks: component.options.apolloLinks,
          HEADER_FRAGMENT
        });
      } catch (e) {
        console.trace(e);
      }
    },
    deploy: (config) => {
      return new Promise(async (resolve, reject) => {
        console.log(
          `starting deploy for service:${config.service.name} for env:${
            context.environment.name
          } on branch:${context.branch.name}`
        );

        const serviceName = config.service.name;
        const awsAccountId = context.secrets.AWS_ACCOUNT_ID;
        const awsRegion = context.secrets.AWS_REGION;

        const handlerLocation = config.handler.location;
        const componentLocation = `./${config.service.location}`;
        const appFolder = `./.unstack/tmp/artifacts/deploy/${serviceName}`;

        const buildAppFolderCommand = `mkdir -p ${appFolder}`;
        const buildAppFolder = await exec(buildAppFolderCommand, { cwd: process.cwd() });

        await exec(`cp -R ${handlerLocation}/* ${appFolder}`, {
          cwd: process.cwd()
        });

        await exec(`cp ${handlerLocation}/.babelrc ${appFolder}`, {
          cwd: process.cwd()
        });

        await exec(`rm -rf ${appFolder}/component`, { cwd: process.cwd() });
        await exec(`cp -rf ${componentLocation}/. ${appFolder}/component`, { cwd: process.cwd() });

        const handlerPackageJson = JSON.parse(
          fs.readFileSync(handlerLocation + '/package.json', { encoding: 'utf-8' })
        );

        // to get es6 goodness via babel
        const serviceDependencies = JSON.parse(
          fs.readFileSync(handlerLocation + '/service-dependencies.json', { encoding: 'utf-8' })
        );

        const componentPackageJson = JSON.parse(
          fs.readFileSync(componentLocation + '/package.json', { encoding: 'utf-8' })
        );

        // merge package.json dependencies in place with handler dependencies
        componentPackageJson.dependencies = Object.assign(
          {},
          handlerPackageJson.dependencies,
          componentPackageJson.dependencies,
          serviceDependencies
        );

        fs.writeFileSync(
          appFolder + '/package.json',
          JSON.stringify(componentPackageJson),
          'utf-8'
        );

        // BEGIN fill in Dockfile
        const dockerfileString = fs.readFileSync(handlerLocation + '/Dockerfile', {
          encoding: 'utf-8'
        });

        const apiEndpoint = {
          key: 'API_ENDPOINT',
          value:
            context.environment.name == 'production'
              ? 'https://api.careerkarma.chat'
              : `http://${context.services['backend.chat-api'].outputs.endpoint}`
        };

        const hash = await hashElement(`${appFolder}/entry.unstack.js`, {});

        const bundleFilename = `entry-${hash.hash}.js`;

        const bundlePath = {
          key: 'BUNDLE_PATH',
          value: `dist/${bundleFilename}`
        };

        const bundleDirectory = {
          key: 'BUNDLE_DIRECTORY',
          value: `./`
        };

        const publicDirectory = {
          key: 'PUBLIC_DIRECTORY',
          value: './component/public'
        };

        const headerFragmentPath = {
          key: 'HEADER_FRAGMENT_PATH',
          value: `./component/layout/_header.html`
        };

        const evaluatedDockerfileString = [
          apiEndpoint,
          bundlePath,
          publicDirectory,
          bundleDirectory,
          headerFragmentPath
        ].reduce((result, variable) => {
          return result.replace(`{{${variable.key}}}`, `"${variable.value}"`);
        }, dockerfileString);

        fs.writeFileSync(appFolder + '/Dockerfile', evaluatedDockerfileString, 'utf-8');
        // END fill in Dockerfile

        // BEGIN ORCHESTRATION

        const parcelInstallCommand = `sudo npm install -g parcel-bundler`;
        const parcelInstall = await exec(parcelInstallCommand, {
          cwd: appFolder,
          maxBuffer: 1024 * 500
        });

        const babelInstallCommand = `sudo npm install @babel/core @babel/cli @babel/plugin-proposal-object-rest-spread@^7.0.0 @babel/plugin-proposal-class-properties@^7.1.0 @babel/preset-env@^7.1.0 @babel/preset-react@^7.0.0 @babel/plugin-transform-runtime@^7.1.0`;
        const babelInstall = await exec(babelInstallCommand, {
          cwd: appFolder,
          maxBuffer: 1024 * 500
        });

        try {
          const babelFile = await exec(
            `parcel build entry.unstack.js --out-file ${bundleFilename}`,
            {
              cwd: appFolder,
              maxBuffer: 1024 * 500
            }
          );
          console.log(babelFile.stdout);
          console.log(babelFile.stderr);
        } catch (e) {
          console.log(e);
        }

        const sharedBabel = `--presets=@babel/preset-env,@babel/preset-react --plugins=@babel/plugin-proposal-object-rest-spread,@babel/plugin-transform-runtime,@babel/plugin-proposal-class-properties`;

        // handler should copy these files to produce artifact. ORCHESTRATION can handle transpiling
        await exec(`rm -rf ./component/node_modules`, { cwd: appFolder, maxBuffer: 1024 * 500 });

        const babelServerFile = await exec(
          `./node_modules/.bin/babel server.unstack.js -o server.js ${sharedBabel}`,
          { cwd: appFolder, maxBuffer: 1024 * 500 }
        );
        const babelFolder = await exec(
          `./node_modules/.bin/babel component -d compiled-component --ignore "component/node_modules/**/*" ${sharedBabel}`,
          { cwd: appFolder, maxBuffer: 1024 * 500 }
        );

        const babelSrc = await exec(
          `./node_modules/.bin/babel src -d compiled-src ${sharedBabel}`,
          { cwd: appFolder, maxBuffer: 1024 * 500 }
        );

        const copyNonJSFiles = await exec(
          `./node_modules/.bin/babel component -d compiled-component --copy-files --ignore "component/node_modules/**/*" ${sharedBabel}`,
          { cwd: appFolder, maxBuffer: 1024 * 500 }
        );

        const ebEnvironment = `${serviceName.split('.').join('')}-${
          context.environment.name == 'review'
            ? context.branch.name.split('-').join('')
            : context.environment.name
        }`
          .replace(/_/, '')
          .replace(/\//g, '')
          .replace(/\$/, '')
          .replace(/@/, '')
          .substring(0, 38);

        const ebConfig = {
          'branch-defaults': {
            default: {
              environment: ebEnvironment,
              group_suffix: serviceName
            }
          },
          global: {
            application_name: serviceName,
            branch: null,
            default_ec2_keyname: null,
            default_platform: 'Docker 18.03.1-ce',
            default_region: awsRegion,
            include_git_submodules: true,
            instance_profile: null,
            platform_name: null,
            platform_version: null,
            profile: null,
            repository: null,
            sc: null,
            workspace_type: 'Application'
          }
        };

        yaml.sync(`${appFolder}/.elasticbeanstalk/config.yml`, ebConfig);

        const listEnvCommand = `eb list`;
        const listEnv = await exec(listEnvCommand, { cwd: appFolder, maxBuffer: 1024 * 500 });
        if (listEnv.stdout.indexOf(ebEnvironment) == -1) {
          const createCommand = `eb create ${ebEnvironment} --elb-type application`;
          await exec(createCommand, { cwd: appFolder, maxBuffer: 1024 * 500 });
        }

        // run eb deploy
        const deployCommand = `eb deploy`;
        const deploy = await exec(deployCommand, { cwd: appFolder, maxBuffer: 1024 * 500 });
        console.log(deploy.stdout);
        console.log(deploy.stderr);

        // get endpoint
        const statusCommand = `eb status`;
        const status = await exec(statusCommand, { cwd: appFolder, maxBuffer: 1024 * 500 });
        console.log(status.stdout);

        // END ORCHESTRATION

        const secretsString = status.stdout;

        const cnameString = secretsString
          .split('\n')
          .find((string) => string.indexOf('CNAME: ') != -1);
        const cname = cnameString.slice('CNAME: '.length + 2);

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
