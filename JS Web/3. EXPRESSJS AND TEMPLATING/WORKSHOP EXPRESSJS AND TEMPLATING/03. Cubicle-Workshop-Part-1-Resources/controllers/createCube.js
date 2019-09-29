const Cube = require('../models/cube').Cube;
const fs = require('fs');
const data = require('../config/database');
const len = require('../config/database').length;

const createCube = function (req, res) {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    console.log(name);
    console.log(description);
    console.log(imageUrl);
    console.log(difficultyLevel);
    const newCube = new Cube(name, description, imageUrl, difficultyLevel);

    data.push(newCube);
    res.redirect('/');
}

module.exports = {
    createCube,
}