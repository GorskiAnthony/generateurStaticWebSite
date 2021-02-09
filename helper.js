const { create } = require("domain");
const fs = require("fs");
const config = require("./config");
const html = require("./src/template/html");
const css = require("./src/template/style");

const { buildDir, title, pagesFolder, cssFolder } = config;

// Cut > .js
extentionFile = (page) => {
	let extention = page.slice(0, -3);
	return extention;
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
		console.log(`Le dossier ${dir} a été créé avec succès.`);
	}
};

// Get all pages
exports.pages = (pagesFolder) => {
	const pages = fs.readdirSync(pagesFolder, (error) => {
		if (error) {
			console.error(error);
		}
	});
	console.log(pages);
	return pages;
};

// Create pages
exports.createPages = (pages) => {
	pages.map((page) => {
		createPage(page);
	});
};

// Create folder page
createPage = async (page) => {
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
		html({ title: title, children: content }),
		(err) => {
			if (err) console.error(err);
		}
	);
};

exports.createPageCss = (page) => {
	page.map((page) => {
		createFileCss(page);
	});
};

createFileCss = async (page) => {
	const content = await require(`${cssFolder}/${page}`);

	this.createFolder(`${buildDir}/styles`);
	fs.writeFile(
		`${buildDir}/styles/style.css`,
		css({ children: content }),
		(err) => {
			if (err) console.error(err);
		}
	);
};
