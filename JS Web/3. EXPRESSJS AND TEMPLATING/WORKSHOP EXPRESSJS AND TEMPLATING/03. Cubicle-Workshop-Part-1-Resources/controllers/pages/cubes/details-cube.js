const path = require('path');
const cubeController = require(path.resolve(__projectDir, 'controllers', 'cube-Controller'));
const { getDetailidCube } = cubeController;

function renderDetailsPage(req, res) {
    getDetailidCube(req, res)
        .then((cube) => {
            const template = path.resolve('views', 'cubes', 'details-cube.hbs');
            res.render(template, { cube });
        })
}

module.exports = {
    renderDetailsPage,
}