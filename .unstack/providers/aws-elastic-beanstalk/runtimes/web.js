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
    return await fromBaseCommand({ type: '' })({
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
