const models = require('../../../models');
const appConfig = require('../../../app-config');

const logout = function (req, res) {
    const token = req.cookies[appConfig.authCookieName];
    models.tokenBlacklistModel.create({ token }).then(() => {
        res.clearCookie(appConfig.authCookieName).redirect('/');
    });
}

module.exports = {
    logout,

}