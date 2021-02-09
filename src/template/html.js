const footer = require("../components/footer");
const console = require("../scripts/console");

const html = ({ title, children }) => /*html*/ `<!DOCTYPE html>
<html lang="fr">
    <head>
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <link rel="stylesheet" href="./styles/style.css">
        ${console}

    </head>
    <body>
        ${children}
        ${footer}
    </body>
</html>`;

module.exports = html;
