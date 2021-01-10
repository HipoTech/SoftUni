const models = require('../models');
const jwt = require('../utils/jwt');
const config = require('../config/config');

module.exports = {
    get: {
        userInfo: (req, res, next) => {
        },
        logout: (req, res, next) => {
            res.clearCookie(config.cookie)
            res.clearCookie('ecom-user-info')
                .send('Logout successfully!');
        },

        auth: (req, res) => {
            const token = req.cookies[config.cookie];
            jwt.verifyToken(token)
                .then(({ id }) => models.User.findById(id))
                .then(user => { res.send(user) })
                .catch(() => res.status(401).send('Not logged in!'));
        },
    },

    post: {
        register: (req, res, next) => {
            const { userName, email, imageUrl, isAdmin, password } = req.body;
            const newUser = { userName, password, email, imageUrl, isAdmin }
            models.User.create(newUser)
                .then(() => {
                    res.status(200);
                    res.send({ userName, email })
                })
                .catch(err => {
                    res.status(409)
                    res.send(err)
                })
        },

        login: (req, res, next) => {
            const { userName, password } = req.body;
            models.User.findOne({ userName: { $eq: userName } })
                .then((user) => {
                    if (user === null) {
                        res.status(401).send({ error: 'Wrong username or password!' });
                        return;
                    }
                    Promise.all([user, user.matchPassword(password)])
                        .then(([user, match]) => {
                            if (!match) {
                                res.status(401).send({ error: 'Wrong username or password!' });
                                return;
                            }
                            const token = jwt.createToken({ id: user._id });
                            const userForFrontEnd = {
                                userName: user.userName,
                                isAdmin: user.isAdmin,
                            }
                            res.cookie(config.cookie, token)
                                .cookie('ecom-user-info', JSON.stringify(userForFrontEnd))
                                .send(userForFrontEnd)
                        })
                }).catch(err => {
                    console.log(err);
                    res.status(401)
                    res.send('Wrong username or password!');
                })
        },
    }
};