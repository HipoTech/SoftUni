const cubeController = require('../cube-Controller');
const getDetaeldCube = cubeController.getDetaeldCube;


function renderDetailsPage(req, res) {
    getDetaeldCube(req, res)
        .then((cube) => {
            res.render('../../views/home-search.hbs', { cube });
        })
}

module.exports = {
    renderDetailsPage,

}