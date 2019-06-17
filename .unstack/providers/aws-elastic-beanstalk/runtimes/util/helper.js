const ebList = `eb list`;
const ebDeploy = `eb deploy`;
const ebStatus = `eb status`;

const util = require("util");
const exec = util.promisify(require("child_process").exec);
const yaml = require("write-yaml");

const buildEbConfig = ({
  ebEnvironment,
  serviceName,
  awsRegion,
  runtime = "Docker 18.06.1-ce"
}) => {
  const ebConfig = {
    "branch-defaults": {
      default: {
        environment: ebEnvironment,
        group_suffix: serviceName
      }
    },
    global: {
      application_name: serviceName,
      branch: null,
      default_ec2_keyname: null,
      default_platform: runtime,
      default_region: awsRegion,
      include_git_submodules: true,
      instance_profile: null,
      platform_name: null,
      platform_version: null,
      profile: null,
      repository: null,
      sc: null,
      workspace_type: "Application"
    }
  };
  return ebConfig;
};

const ebCreateFragment = (ebEnvironment, ebType = "", instanceType = 't2.micro') =>
  `eb create ${ebEnvironment} ${ebType} --elb-type application --instance_type ${instanceType}`;

const makeEbEnvironment = ({
  serviceName,
  environmentName,
  branchName,
  includeServiceInEnvName = true
}) => {
  const ebEnvironment = `${
    includeServiceInEnvName ? serviceName.split(".").join("") + "-" : ""
  }${
    environmentName == "review"
      ? branchName.split("-").join("")
      : environmentName
  }`
    .replace(/_/, "")
    .replace(/\//g, "")
    .replace(/\$/, "")
    .replace(/@/, "")
    .substring(0, 38);
  return ebEnvironment;
};

const makeRunCommand = cwd => async commandString => {
  try {
    // run eb deploy
    const command = commandString;
    const result = await exec(command, { cwd, maxBuffer: 1024 * 500 });
    console.log(result.stdout);
    console.log(result.stderr);
    return result;
  } catch (e) {
    console.log(e);
    console.trace(e);
    throw new Error(e);
  }
};

const fromBaseCommand = ({ type }) => async ({
  serviceName,
  awsRegion,
  appFolder,
  environmentName,
  branchName,
  includeServiceInEnvName,
  instanceType
}) => {
  const runCommand = makeRunCommand(appFolder);

  const ebEnvironment = makeEbEnvironment({
    serviceName,
    environmentName,
    branchName,
    includeServiceInEnvName
  });

  const ebConfig = buildEbConfig({ ebEnvironment, serviceName, awsRegion });

  yaml.sync(`${appFolder}/.elasticbeanstalk/config.yml`, ebConfig);

  const ebListResult = await runCommand(ebList);
  if (ebListResult.stdout.indexOf(ebEnvironment) == -1) {
    const ebCreate = ebCreateFragment(
      ebEnvironment,
      type == "worker" ? "-t worker" : "",
      instanceType
    );
    await runCommand(ebCreate);
  }

  await runCommand(ebDeploy);
  const result = await runCommand(ebStatus);

  const cnameString = result.stdout
    .split("\n")
    .find(string => string.indexOf("CNAME: ") != -1);
  const cname = cnameString.slice("CNAME: ".length + 2);
  return { cname };
};

module.exports = {
  fromBaseCommand,
  ebCreateFragment,
  makeEbEnvironment,
  makeRunCommand
};
