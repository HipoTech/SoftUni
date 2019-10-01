const Cube = require('../models/cube').Cube;



const createCube = function (req, res) {

    const { name, description, imageUrl, difficultyLevel } = req.body;
    const newCube = new Cube(id, name, description, imageUrl, difficultyLevel);
    //res.redirect('/');
};

module.exports = {
    createCube,
}