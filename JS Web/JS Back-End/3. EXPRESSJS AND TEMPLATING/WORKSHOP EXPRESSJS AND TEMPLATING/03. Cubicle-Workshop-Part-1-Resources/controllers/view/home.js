const path = require('path');
const cubeController = require(path.resolve(__projectDir, 'controllers', 'cube-Controller'));
const getAllCubes = cubeController.getAllCubesOrSearch;

function renderHomePage(req, res) {
    getAllCubes(req, res)
        .then((cubes) => {
            const params = req.query;
            const template = path.resolve('views', 'index.hbs');
            res.render(template, { cubes, params });
        })
}

module.exports = {
    renderHomePage,

}