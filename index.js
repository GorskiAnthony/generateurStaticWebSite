const helper = require("./helper");
const config = require("./config");

const { buildDir } = config;

helper.remove();
helper.createFolder(buildDir);
