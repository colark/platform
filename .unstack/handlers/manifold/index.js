const util = require('util');
const exec = util.promisify(require('child_process').exec);

const wrapComponent = (_, context) => {
  return {
    provideContext: async () => {
      return new Promise(async (resolve, reject) => {
        // return secrets from manifold
        const child = await exec('manifold export', { cwd: process.cwd() });
        if (child.stderr) {
          console.log(child.stderr)
        }
        const secretsString = child.stdout;

        const secretPairStrings = secretsString.split("\n").slice(1);
        const secrets = secretPairStrings.reduce((result, secretString) => {
          const [key, value] = secretString.split("=");
          if (key) {
            result[key] = value;
          }
          return result;
        }, {})

        resolve({
          secrets
        })
      })
    }
  }
}


module.exports = {
  wrapComponent
}
