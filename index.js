/** My helpers */
const helper = require("./helper");
const config = require("./config");

/** desctructuring Helpers and Config */
const { buildDir, pagesFolder, cssFolder } = config;
const { remove, createFolder, pages, createPages, createPageCss } = helper;

/** Begin APP */
remove();
createFolder(buildDir);
createPages(pages(pagesFolder));

/** Create css file */
createPageCss(pages(cssFolder));
