/** J'appel mes helpers */
const helper = require("./helper");
const fs = require("fs");

const config = require("./config");
const pagesFolder = "./src/pages";

/** En mode descrtucturing, j'appel mes elements */
const { buildDir } = config;
const { remove, createFolder, pages, createPages } = helper;

/** Build app */
remove();
createFolder(buildDir);

createPages(pages(pagesFolder));
