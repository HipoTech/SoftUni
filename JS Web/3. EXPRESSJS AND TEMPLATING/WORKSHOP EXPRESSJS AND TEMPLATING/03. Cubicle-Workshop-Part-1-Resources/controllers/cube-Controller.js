const path = require('path');
const { Cube, Cubicle } = require(path.resolve(__projectDir, 'models', 'cube-model'));
const { create, deleteOne, updateDbElement } = require(path.resolve(__projectDir, 'helpers', 'requester'));

const searchByName = function (array, name) {
    const showCubes = [];
    array.forEach(cube => {
        const cubeName = cube['name'].toLowerCase();
        const nameToSearch = name.toLowerCase();
        if (cubeName.includes(nameToSearch)) {
            showCubes.push(cube);
        }
    });
    return showCubes
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
            return searchByName(cubes, name);
        })
        .catch((error) => {
            console.log(`Faild to search for cubes in DB. Error: ${error}`)
            res.send('Server Error!')
        });
}

const getDetailidCube = function (req, res) {
    const id = req.params.id;
    return Cube.findById(id)
        .populate('accessories') // Name of the DB collection
        .then((resultFromDB) => {
            return resultFromDB;
        })
        .catch((error) => {
            res.send('Server Error!')
            res.end();
            console.log(`Faild to search for cube in DB. Error: ${error}`)
        });
}

const createCube = function (req, res) {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    const newCube = new Cubicle(name, description, imageUrl, difficultyLevel);
    create(Cube, newCube, req, res)
        .catch(() => { res.send('Server Error!') });
};

const deleteCube = function (req, res) {
    const cubeId = req.params.id;
    deleteOne(Cube, cubeId)
        .then(() => res.redirect('/'))
        .catch(() => { res.send('Server Error!') });
}

const editCube = function (req, res) {
    const cubeId = req.params.id;
    updateDbElement(Cube, cubeId, req.body)
        .then(() => res.redirect(`/details/${cubeId}`));
}

module.exports = {
    createCube,
    getAllCubesOrSearch,
    getDetailidCube,
    deleteCube,
    editCube,

}