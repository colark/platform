import component from "./compiled-component";
import launchServer from "./serverLauncher.compiled";

const wrapped = async ({ makeConfig }, context) => {
  const config = await makeConfig(context);
  launchServer(config);
};

const context = {};

(async () => await wrapped(component, context))();
