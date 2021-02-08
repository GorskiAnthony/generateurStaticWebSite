const fs = require("fs");
const config = require("./config");

const { buildDir } = config;

exports.remove = () => {
	const deleteFolder = fs.rmSync(buildDir, { recursive: true, force: true });
	console.log(`le dossier ${buildDir} est supprimé`);
	return deleteFolder;
};

exports.createFolder = (dir) => {
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir, (error) => {
			console.error(`La route n'existe pas. L'error : ${error}`);
		});
	}
};

exports.pages = (pagesFolder) => {
	const pages = fs.readdirSync(pagesFolder, (error) => {
		if (error) {
			console.error(error);
		}
	});
	return pages;
};

exports.createPages = (pages) => {
	pages.map((page) => {
		console.log(`La page ${page} est créé.`);
		fs.writeFile(`${buildDir}/${page}.html`, page, (err) => {
			console.error(err);
		});
	});
};
