#!/usr/bin/env node

var newword = require('./App'),
chalk = require('chalk');
(async () => {
var data = await newword();
console.log('Word Of The Day')
})();
