var Feed = require('rss-to-json');

module.exports = async ()=> {
var data = await Feed.load('http://feeds.feedburner.com/wordthink/vIYJ')
return {
title:data.items[0].title,
description:data.items[0].description.replace( /(<([^>]+)>)/ig, ''),
url:data.items[0].url,
author:data.items[0].author
}
}