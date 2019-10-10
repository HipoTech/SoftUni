const path = require('path');

function render404Page(req, res) {
    const template = path.resolve('views', '404.hbs');
    res.render(template);
}

module.exports = {
    render404Page,
}