/** My helpers */
const helper = require("./helper");
const config = require("./config");

/** desctructuring Helpers and Config */
const { buildDir, pagesFolder } = config;
const { remove, createFolder, pages, createPages } = helper;

/** Begin APP */
remove();
createFolder(buildDir);
createPages(pages(pagesFolder));
