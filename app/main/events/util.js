const { installMutations, loadMutations } = require("@react-mutate/loader");
const os = require("os");
const path = require("path");

const mutationsPath = path.join(os.homedir(), "aurora-extensions"); //DIS BAD TODO: FIX

const install = filepath => {
  const userMutations = ["aurora-mutation-cats"]; // Dem kitty cats-os are all we need in life
  return installMutations(userMutations, filepath);
};

const load = filepath => {
  return loadMutations(filepath);
};

const installAndLoadMutations = async () => {
  await install(mutationsPath);
  return await load(mutationsPath);
};

module.exports = {
  install,
  load,
  mutationsPath,
  installAndLoadMutations
};
