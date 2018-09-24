import { GraphQLServer } from 'graphql-yoga';

const util = require('util');
const exec = util.promisify(require('child_process').exec);
const path = require('path');
const fs = require('fs');
const yaml = require('write-yaml');

const wrapComponent = ({ makeConfig }, context) => {
  const build = (config) => {};

  return {
    start: (config) => {
      const server = new GraphQLServer(makeConfig(context));
      server.start(() => console.log('Server is running on localhost:4000'));
    },
    test: (config) => {},
    provideContext: async (config) => {
      return new Promise(async (resolve, reject) => {
        const componentLocation = config.service.location;
        resolve({
          location: `${process.cwd()}/${componentLocation}`
        });
      });
    },
    build,
    deploy: async (config) => {
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
        const appFolder = `./.unstack/tmp/docker-apps/${serviceName}`;

        // const ecsLoginCommand = `aws ecr get-login --no-include-email --region ${awsRegion}`;
        // const ecsLogin = await exec(ecsLoginCommand, { cwd: process.cwd() });
        //
        // const dockerloginCommand = ecsLogin.stdout;
        // const dockerLogin = await exec(dockerloginCommand, { cwd: process.cwd() });

        //build tmp docker app folder
        const buildAppFolderCommand = `mkdir -p ${appFolder}`;
        const buildAppFolder = await exec(buildAppFolderCommand, { cwd: process.cwd() });

        //copy files to tmp docker app folder
        const copyDockerFileCommand = `cp -rf ${handlerLocation}/Dockerfile ${appFolder}/Dockerfile`;
        const copyDockerFile = await exec(copyDockerFileCommand, { cwd: process.cwd() });

        await exec(`cp -R ${handlerLocation}/entry.unstack.js ${appFolder}/entry.unstack.js`, {
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

        // transpile app before dockerizing it
        const babelFile = await exec(
          'npx babel-cli entry.unstack.js -o entry.js --presets=env,react --plugins=transform-object-rest-spread,transform-runtime',
          { cwd: appFolder, maxBuffer: 1024 * 500 }
        );
        const babelFolder = await exec(
          'npx babel-cli component -d compiled-component --presets=env,react --plugins=transform-object-rest-spread,transform-runtime',
          { cwd: appFolder, maxBuffer: 1024 * 500 }
        );
        const copyNonJSFiles = await exec(
          'npx babel-cli component -d compiled-component --copy-files --presets=env,react --plugins=transform-object-rest-spread,transform-runtime',
          { cwd: appFolder, maxBuffer: 1024 * 500 }
        );

        const ebEnvironment =
          context.environment.name == 'review'
            ? context.branch.name.split('-').join('')
            : context.environment.name;

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
          const createCommand = `eb create ${ebEnvironment}`;
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

        const secretsString = status.stdout;

        const cnameString = secretsString
          .split('\n')
          .find((string) => string.indexOf('CNAME:') != -1);
        const cname = cnameString.slice('CNAME: '.length);

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
