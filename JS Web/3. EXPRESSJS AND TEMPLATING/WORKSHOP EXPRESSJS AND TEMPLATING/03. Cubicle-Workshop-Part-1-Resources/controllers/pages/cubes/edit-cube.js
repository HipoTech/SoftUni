const path = require('path');
const { Cube } = require(path.resolve(__projectDir, 'models', 'cube-model'));
function renderEditPage(req, res) {
    const cubeId = req.params.id;
    Cube.findById(cubeId)
        .then((cube) => {
            const template = path.resolve('views', 'cubes', 'edit-cube.hbs');
            res.render(template, { cube });
        })
}

module.exports = {
    renderEditPage,

}