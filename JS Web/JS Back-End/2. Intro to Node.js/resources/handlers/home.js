const url = require('url');
const fs = require('fs');
const path = require('path');
const cats = require('../data/cats.json');
const breeds = require('../data/breeds.json');

const pathNameFunc = function (req, res) {
    const pathName = url.parse(req.url).pathname;
}

module.exports = {
    pathNameFunc,
}