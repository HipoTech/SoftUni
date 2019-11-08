const models = require('../models');
// const jwt = require('../utils/jwt');
const config = require('../config/config');

module.exports = {
    get: {
        register: (req, res, next) => {
            console.log(req.params);
        },
    },

    post: {
        register: (req, res, next) => {
            const { userName, password, email } = req.body;
            const user = { userName, password, email }
            res.send(user)
        },
    }
};