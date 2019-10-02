const cubeController = require('../cube-Controller');
const getAllCubes = cubeController.getAllCubes;
console.log(getAllCubes);

function renderHomePage(req, res) {
    getAllCubes(req, res)
        .then((cubes) => {
            res.render('../views/index.hbs', { cubes });
        })
}

module.exports = {
    renderHomePage,

}