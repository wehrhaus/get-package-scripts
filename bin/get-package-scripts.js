#! /usr/bin/env node

// Node script to return the scripts object of a package.json file
const fs = require('fs');
const path = require('path');

function getScriptsObjectFromPackage(filename) {
  // Get the full path of the file
  filePath = filename ? path.resolve(filename) : process.cwd();

  // Read the file contents
  const contents = fs.readFileSync(filePath, 'utf8');

  // Parse the contents into an object
  const packageJsonFile = JSON.parse(contents);

  // Return the scripts object
  return packageJsonFile.scripts ?? {};
}

// Print the scripts object in green and blue
const packagePath = process.argv[2] ? `${process.argv[2]}/` : '';
const scripts = getScriptsObjectFromPackage(`${packagePath}package.json`);

Object.keys(scripts).forEach(scriptName => {
  const name = `\x1b[32m${scriptName}\x1b[0m`;
  const desc = `\x1b[34m${scripts[scriptName]}\x1b[0m`;
  console.log(`${name}: ${desc}`);
});

module.exports = {
  getScriptsObjectFromPackage,
};
