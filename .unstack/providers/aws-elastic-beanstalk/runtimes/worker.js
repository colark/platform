const { fromBaseCommand } = require('./util/helper');

module.exports = {
  createOrUpdate: async ({
    serviceName,
    awsRegion,
    appFolder,
    environmentName,
    branchName,
    includeServiceInEnvName,
    instanceType
  }) => {
    return await fromBaseCommand({ type: 'worker' })({
      serviceName,
      awsRegion,
      appFolder,
      environmentName,
      branchName,
      includeServiceInEnvName,
      instanceType
    });
  }
};
