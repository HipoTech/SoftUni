const cubeModels = require('../models/cube');
const Cube = cubeModels.Cube;
const Cubicle = cubeModels.Cubicle;

const postCube = function (element, req, res) {
    Cube.create(element)
        .then((elementFromDb) => console.log(`Sucksesfuli added to DB: ${elementFromDb}`))
        .then(() => res.redirect('/'))
        .catch((error) => console.log(`Faild to write to DB. Error: ${error}`));
}

const getAllCubes = function (req, res) {
    return Cube.find()
        .then((cubes) => {
            return cubes
        })
        .catch((error) => console.log(`Faild to search in DB. Error: ${error}`));
}

const createCube = function (req, res) {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    const newCube = new Cubicle(name, description, imageUrl, difficultyLevel);
    postCube(newCube, req, res)
};

module.exports = {
    createCube,
    getAllCubes
}