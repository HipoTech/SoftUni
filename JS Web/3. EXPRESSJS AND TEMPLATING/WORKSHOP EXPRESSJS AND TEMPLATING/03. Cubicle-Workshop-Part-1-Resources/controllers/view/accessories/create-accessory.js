const path = require('path');

function renderCreateAccessory(req, res) {
    const template = path.resolve('views', 'accessories', 'create-accessory.hbs');
    res.render(template);
}

module.exports = {
    renderCreateAccessory,

}