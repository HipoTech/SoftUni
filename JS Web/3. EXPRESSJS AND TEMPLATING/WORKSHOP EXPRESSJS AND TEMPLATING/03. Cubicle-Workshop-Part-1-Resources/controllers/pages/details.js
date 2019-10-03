const cubeController = require('../cube-Controller');
const getDetaeldCube = cubeController.getDetaeldCube;


function renderDetailsPage(req, res) {
    getDetaeldCube(req, res)
        .then((cube) => {
            res.render('../views/details.hbs', { cube });
        })
}

module.exports = {
    renderDetailsPage,

}