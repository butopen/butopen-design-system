const outDir = "dist"
const outFile = "index.css"
const inputFile = "src/index.scss"

const browserSync = require("browser-sync");


const path = require('path');
const fs = require("fs");
const sass = require('sass');
const postcss = require('postcss');
const postcssi = postcss([
    require('tailwindcss')(require('./tailwind.config.js')),
    require('autoprefixer'),
    require('postcss-nested'),
    require('postcss-easy-import')({prefix: '_', extensions: ['.css', '.scss']}),
]);

if (!fs.existsSync(outDir))
    fs.mkdirSync(outDir, {recursive: true});

async function processStyle(styleFilePath) {
    try {
        const parsedFilePath = path.parse(styleFilePath);
        const fileType = parsedFilePath.ext === '.scss' ? 'scss' : 'css';
        const originalFileContents = fs.readFileSync(styleFilePath, {encoding: 'utf-8'});
        const css = fileType === 'css' ? originalFileContents : sass.renderSync({file: styleFilePath}).css.toString();
        const result = await postcssi.process(css, {from: styleFilePath});
        const outPath = path.resolve(__dirname, outDir, outFile)
        fs.writeFileSync(outPath, result.css)
    } catch (e) {
        console.log(e)
    }
}

const watch = process.argv.includes('--watch') || process.argv.includes('-w');
console.log('watching: ', watch);

if (watch) {
    browserSync({server: "."});
    const chokidar = require('chokidar');
    chokidar.watch(['./**/*.scss', './index.html']).on('all', (event, path) => {
        console.log(event, path);
        processStyle(inputFile)
        browserSync.reload()
    });
} else
    processStyle(inputFile)
