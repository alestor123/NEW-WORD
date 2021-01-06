#!/usr/bin/env node

var newword = require('./App');
(async () => {
console.log(await newword())
})();
