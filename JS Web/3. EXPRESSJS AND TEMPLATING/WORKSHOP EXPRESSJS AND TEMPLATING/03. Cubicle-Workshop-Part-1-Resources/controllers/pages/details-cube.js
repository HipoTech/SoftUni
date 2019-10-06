const cubeController = require('../cube-Controller');
const { getDetailidCube } = cubeController;

function renderDetailsPage(req, res) {
    getDetailidCube(req, res)
        .then((cube) => {
            res.render('../views/details-cube.hbs', { cube });
        })
}

module.exports = {
    renderDetailsPage,

}