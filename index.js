#!/usr/bin/env node

/**
 *
 * Author: Saad Irfan
 * GitHub: https://github.com/msaaddev
 * Twitter: https://twitter.com/msaaddev
 */

const fs = require('fs');
const cwd = process.cwd();

const ignore = `
# NPM #
##########
# Ignore all directories called node_modules in current folder and any subfolders.
node_modules/
/node_modules/

# Packages #
############
*.7z
*.dmg
*.gz
*.bz2
*.iso
*.jar
*.rar
*.tar
*.zip
*.tgz
*.map

# Logs and databases #
######################
*.log
*.sql
*.env

# OS generated files #
######################
**.DS_Store*
ehthumbs.db
Icon?
Thumbs.db
._*

# Vim generated files #
######################
*.un~

# SASS #
##########
**/.sass-cache
**/.sass-cache/*
**/.map

# Composer #
##########
!assets/js/vendor/
wpcs/
/vendor/

# Bower #
##########
assets/bower_components/*

# Codekit #
##########
/codekit-config.json
*.codekit
**.codekit-cache/*

# Compiled Files and Build Dirs #
##########
/README.html

# PhpStrom Project Files #
.idea/
library/vendors/composer
assets/img/.DS_Store

# Visual Studio Project Files #
.vs/

# No lock files.
package-lock.json
yarn.lock
settings.dat

# next.js
/.next/
/out/

`;

(() => {
	fs.writeFile(`${cwd}/.gitignore`, ignore, err => {
		err ? console.log(err) : null;
	});
})();
