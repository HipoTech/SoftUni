const cubeModels = require('../models/cube');
const Cube = cubeModels.Cube;
const Cubicle = cubeModels.Cubicle;

const postCube = function (element, req, res) {
    Cube.create(element)
        .then((elementFromDb) => console.log(`Sucksesfuli added to DB: ${elementFromDb}`))
        .then(() => res.redirect('/'))
        .catch((error) => console.log(`Faild to write to DB. Error: ${error}`));
}

const getAllCubesOrSearch = function (req, res) {
    const name = req.query.search || '';
    const difficultyFrom = req.query.from;
    const difficultyTo = req.query.to;
    let difficulty = {};

    if (difficultyFrom && difficultyTo) {
        difficulty = { difficultyLevel: { $gte: difficultyFrom }, difficultyLevel: { $lte: difficultyTo } };
    } else if (difficultyFrom) {
        difficulty = { difficultyLevel: { $gte: difficultyFrom } };
    } else if (difficultyTo) {
        difficulty = { difficultyLevel: { $lte: difficultyTo } };
    }

    return Cube.find(difficulty)
        .then((cubes) => {
            const showCubes = [];
            cubes.forEach(cube => {
                const cubeName = cube['name'].toLowerCase();
                const nameToSearch = name.toLowerCase();
                if (cubeName.includes(nameToSearch)) {
                    showCubes.push(cube);
                }
            });

            return showCubes
        })
        .catch((error) => console.log(`Faild to search in DB. Error: ${error}`));
}

const getDetaeldCube = function (req, res) {
    const id = req.params.id;
    return Cube.findById(id)
        .then((cube) => {
            return cube
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
    getAllCubesOrSearch,
    getDetaeldCube,

}