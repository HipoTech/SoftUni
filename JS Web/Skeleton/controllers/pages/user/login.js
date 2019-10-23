const utils = require('../../../utils');
const appConfig = require('../../../app-config');
const models = require('../../../models');

const renderLogin = function (req, res) {
    res.render('user/login.hbs');
}

const loginUser = function (req, res, next) {
    const { username, password } = req.body;
    models.userModel.findOne({ username })
        .then(user => Promise.all([user, user ? user.matchPassword(password) : false]))
        .then(([user, match]) => {
            if (!match) {
                res.render('login.hbs', { massage: 'Wrong password or username!' });
                return;
            }
            const token = utils.jwt.createToken({ id: user._id });
            res.cookie(appConfig.authCookieName, token).redirect('/');
        });
}

module.exports = {
    renderLogin,
    loginUser
}