#!/usr/bin/env node

var newword = require('./App'),
chalk = require('chalk');
(async () => {
var data = await newword();
console.log(chalk.red('Word Of The Day : ')+chalk.green(data.title))
console.log(chalk.red('Description : ')+chalk.green(data.description))
})();
