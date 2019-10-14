const path = require('path');

function renderAbougthPage(req, res) {
    const template = path.resolve('views', 'about.hbs');
    res.render(template);
}

module.exports = {
    renderAbougthPage,

}