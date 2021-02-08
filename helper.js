const fs = require("fs");
const config = require("./config");
const html = require("./src/template/html");

const { buildDir, title, pagesFolder } = config;

// Cut > .js
extentionFile = (page) => {
	let extention = page.split(".");
	return extention[0];
};

// Delete folder
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

// Get pages on ./src/pages
exports.pages = (pagesFolder) => {
	const pages = fs.readdirSync(pagesFolder, (error) => {
		if (error) {
			console.error(error);
		}
	});
	return pages;
};

// Create pages
exports.createPages = (pages) => {
	pages.map((page) => {
		this.createPage(page);
	});
};

// Create folder page
exports.createPage = async (page) => {
	// without extention .js
	const dir = extentionFile(page);
	const content = await require(`${pagesFolder}/${page}`);

	// if dir = index, is not necessary to create the folder 'index'
	if (dir === "index") {
		fs.writeFile(
			`${buildDir}/index.html`,
			html({ title: title, children: content }),
			(err) => {
				if (err) console.error(err);
			}
		);
		return;
	}

	this.createFolder(`${buildDir}/${dir}`);
	fs.writeFile(
		`${buildDir}/${dir}/index.html`,
		html({ title: dir, children: content }),
		(err) => {
			if (err) console.error(err);
		}
	);
};
