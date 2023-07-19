const path = require('path');
const { getScriptsObjectFromPackage } = require('../bin/get-package-scripts');

const packageWithScripts = path.join(__dirname, 'package-with-scripts.json');
const packageWithoutScripts = path.join(__dirname, 'package-without-scripts.json');

describe('getScriptsObjectFromPackage', () => {
  test('returns the scripts object from a package.json file', () => {
    const scripts = getScriptsObjectFromPackage(packageWithScripts);
    expect(scripts).toBeDefined();
    console.log('scripts', scripts);
  });
  test('returns an empty script object if no scripts are found', () => {
    const scripts = getScriptsObjectFromPackage(packageWithoutScripts);
    expect(scripts).toEqual({});
    console.log('scripts', scripts);
  });
});

