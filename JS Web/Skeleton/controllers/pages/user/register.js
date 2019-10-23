const { validationResult } = require('express-validator');
const models = require('../../../models');

const renderRegister = function (req, res) {
    res.render('user/register.hbs');
}

const registerUser = function (req, res, next) {
    const { username, password, repeatPassword, email } = req.body;
    let result;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        result = Promise.reject({ name: 'ValidationError', errors: errors.errors });
    } else {
        result = models.userModel.create({ username, password });
    }
    return result.then(() => {
        res.redirect('/login');
    }).catch(err => {
        if (err.name === 'ValidationError') {
            res.render('register.hbs', {
                errors: err.errors
            });
            return;
        }
        next(err);
    });
}

module.exports = {
    renderRegister,
    registerUser,

}