# ⚠️ gitignore

![version](https://img.shields.io/npm/v/@msaaddev/gitignore?color=2FD566)
![license](https://img.shields.io/npm/l/@msaaddev/gitignore?color=2FD566)
![downloads](https://img.shields.io/npm/dt/@msaaddev/gitignore?color=2FD566)

Quickly generate a `.gitignore` file in your project.

<br>

<img src="./assets/rocket.png" width="10%" />

## Usage

```sh
npx @msaaddev/gitignore
```

<br>

<img src="./assets/workflow.png" width="10%" />

## Output

Generates a `.gitignore` file with following contents in your project folder.

```.gitignore
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
```

## 🔑 License & Conduct

- MIT © [Saad Irfan](https://github.com/msaaddev)
- [Code of Conduct](https://github.com/msaaddev/gitignore/blob/master/code-of-conduct.md)
