const path = require('path');
function renderRegisterPage(req, res) {
    const template = path.resolve('views', 'users', 'register.hbs');
    res.render(template);
}

module.exports = {
    renderRegisterPage,

}