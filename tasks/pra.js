#!/usr/bin/env node
/**
 * 2018 Truong Pham. 
 */

'use strict';

const fs = require('fs');
const path = require('path');
const cp = require('child_process');

console.log('Start installing...');
// Now that we have packed them, call the global CLI.
cp.execSync('npm install --save react');
cp.execSync('npm install --save react-dom');
cp.execSync('npm install --save react-redux');
cp.execSync('npm install --save react-router');
cp.execSync('npm install --save laravel-config-react-scripts');

console.log('Install React preset successfully!');
console.log('================== truongpx ===================');
console.log('Welcome to the hell!');
process.exit();