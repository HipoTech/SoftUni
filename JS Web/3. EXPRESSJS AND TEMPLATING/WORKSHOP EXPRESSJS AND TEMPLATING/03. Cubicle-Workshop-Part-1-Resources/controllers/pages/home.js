const cubeController = require('../cube-Controller');
const getAllCubes = cubeController.getAllCubesOrSearch;

function renderHomePage(req, res) {
    getAllCubes(req, res)
        .then((cubes) => {
            const params = req.query;
            res.render('../views/index.hbs', { cubes, params });
        })
}

module.exports = {
    renderHomePage,

}