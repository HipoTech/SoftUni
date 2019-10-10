const path = require('path');
function renderLoginPage(req, res) {
    const template = path.resolve('views', 'users', 'login.hbs');
    res.render(template);
}

module.exports = {
    renderLoginPage,

}