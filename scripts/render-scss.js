'use strict';
const fs = require('fs');
const upath = require('upath');
const sh = require('shelljs');

const sourcePath = upath.resolve(upath.dirname(__filename), '../Rohit/css');
const destPath = upath.resolve(upath.dirname(__filename), '../dist/css');

module.exports = function renderSCSS() {
    // Copy CSS files from Rohit to dist
    if (!sh.test('-e', destPath)) {
        sh.mkdir('-p', destPath);
    }
    
    sh.cp('-R', sourcePath + '/*', destPath);
    console.log('### INFO: CSS files copied from Rohit/css to dist/css');
};