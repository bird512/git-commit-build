
# git-auto

> Tiny script to automate your git workflow


## Installation

    $ npm install git-commit-build --save

## Features
  - Automatically adds watching files to the staging area and generates commits

## Usage
add as a script in the package.json

```
Usage: git-commit-build [files]

eg:  
"deploy": "atool-build -o ../packprint/src/main/webapp && npm run commitrelease",
"commitrelease":"git-commit-build ../packprint/src/main/webapp/index.js ../packprint/src/main/webapp/index.css ../packprint/src/main/webapp/common.js",

```

## Note

It is an unbelievably horrible idea to use this script if anyone else is going to look through your commit history.

## License

MIT
