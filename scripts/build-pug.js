'use strict';
const upath = require('upath');
const sh = require('shelljs');
const renderPug = require('./render-pug');

const srcPath = upath.resolve(upath.dirname(__filename), '../Rohit');
const distPath = upath.resolve(upath.dirname(__filename), '../dist');

// Copy all HTML files from Rohit to dist
sh.find(srcPath).forEach(_processFile);

// Also copy HTML files directly (since we're not using pug)
sh.cp('-R', srcPath + '/*.html', distPath);
sh.cp('-R', srcPath + '/*.json', distPath);

function _processFile(filePath) {
    if (
        filePath.match(/\.pug$/)
        && !filePath.match(/include/)
        && !filePath.match(/mixin/)
        && !filePath.match(/\/pug\/layouts\//)
    ) {
        renderPug(filePath);
    }
}