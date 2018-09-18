const util = require('util');
const exec = util.promisify(require('child_process').exec);

const wrapComponent = (_, context) => {
  return {
    provideContext: async () => {
      return new Promise(async (resolve, reject) => {
        const secrets = JSON.parse(process.env.UNSTACK_SECRETS || "{}");

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
