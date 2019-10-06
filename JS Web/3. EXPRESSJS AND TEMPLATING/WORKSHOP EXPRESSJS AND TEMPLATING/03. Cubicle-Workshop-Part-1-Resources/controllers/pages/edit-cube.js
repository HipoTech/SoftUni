const { Cube } = require('../../models/cube-model')
function renderEditPage(req, res) {
    const cubeId = req.params.id;
    Cube.findById(cubeId)
        .then((cube) => {
            res.render('../views/edit-cube.hbs', { cube });
        })
}

module.exports = {
    renderEditPage,

}