const maxBuffer = 1024 * 500;
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');

export default {
  process: async ({ cwd, additionalTransforms = [], hasSrc = false }) => {
    const babelLocation = `${process.cwd()}/node_modules/.bin/babel`;

    if (!fs.existsSync(babelLocation)) {
      const babelInstallCommand = `sudo npm install @babel/core @babel/cli @babel/plugin-proposal-object-rest-spread@^7.0.0 @babel/plugin-proposal-class-properties@^7.1.0 @babel/preset-env@^7.1.0 @babel/preset-react@^7.0.0 @babel/plugin-transform-runtime@^7.1.0`;
      const babelInstall = await exec(babelInstallCommand, {
        cwd: process.cwd(),
        maxBuffer
      });
    }

    const sharedBabel = `--presets=@babel/preset-env,@babel/preset-react --plugins=@babel/plugin-proposal-object-rest-spread,@babel/plugin-transform-runtime,@babel/plugin-proposal-class-properties`;

    await exec(`rm -rf ./component/node_modules`, { cwd, maxBuffer });

    for (const { to, from } of additionalTransforms) {
      await exec(`${babelLocation} ${from} -o ${to} ${sharedBabel}`, {
        cwd,
        maxBuffer
      });
    }

    const babelFolder = await exec(
      `${babelLocation} component -d compiled-component --ignore "component/node_modules/**/*" ${sharedBabel}`,
      { cwd, maxBuffer }
    );

    if (hasSrc) {
      const babelSrc = await exec(`${babelLocation} src -d compiled-src ${sharedBabel}`, {
        cwd,
        maxBuffer
      });
    }

    const copyNonJSFiles = await exec(
      `${babelLocation} component -d compiled-component --copy-files --ignore "component/node_modules/**/*" ${sharedBabel}`,
      { cwd, maxBuffer }
    );
  }
};
