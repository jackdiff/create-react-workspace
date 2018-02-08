#!/usr/bin/env node
/**
 * 2018 Truong Pham. 
 */

'use strict';

const fs = require('fs');
const path = require('path');
const cp = require('child_process');
const jsonfile = require('jsonfile')

console.log('Start installing...');
// Now that we have packed them, call the global CLI.
cp.execSync('npm install --save react');
cp.execSync('npm install --save react-dom');
cp.execSync('npm install --save laravel-config-react-scripts');

console.log('================== Add scripts ===================');
const addScript = (script) => {
    try {
        var packaged = jsonfile.readFileSync('package.json')
        if (!packaged.scripts) packaged.scripts = {}
        if (!script.force && packaged.scripts[script.key]) {
          throw new ThatScriptsEntryAlreadyExistsThereInThePackageDotJsonMyFriendError(script.key)
        }
            packaged.scripts[script.key] = script.value
            jsonfile.writeFileSync('package.json', packaged, {spaces: 2})
        } catch (e) {
        if (e.message === 'ENOENT, no such file or directory \'package.json\'') {
            throw new YouDoNotAppearToBeInANodeProjectPerhapsUShouldRun_npm_init_error()
        } else {
            throw e
        }
    }
}
addScript({'key': 'start', 'value': 'react-scripts start'});
addScript({'key': 'build', 'value': 'react-scripts build'});
addScript({'key': 'test', 'value': 'react-scripts test --env=jsdom'});
addScript({'key': 'eject', 'value': 'react-scripts eject'});
addScript({'key': 'rwatch', 'value': 'react-scripts watch'});

console.log('Install React preset successfully!');
console.log('================== truongpx ===================');
console.log('Welcome to the hell!');
process.exit();