const path = require('path');
function renderCreatePage(req, res) {
    const template = path.resolve('views', 'cubes', 'create-cube.hbs');
    res.render(template);
}

module.exports = {
    renderCreatePage,

}