const models = require('../models');
const jwt = require('../utils/jwt');
const config = require('../config/config');

module.exports = {
    get: {
        userInfo: (req, res, next) => {
            console.log(req.params);
        },
        logout: (req, res, next) => {
            res.clearCookie(config.cookie).send('Logout successfully!');
        },

        auth: (req, res) => {
            const token = req.cookies[config.cookie];
            jwt.verifyToken(token)
                .then(({ id }) => models.User.findById(id))
                .then(user => { res.send(user) })
                .catch(() => res.status(401).send('HELLO!'));
        },
    },

    post: {
        register: (req, res, next) => {
            const { userName, password, email, imageUrl, isAdmin } = req.body;
            const newUser = { userName, password, email, imageUrl, isAdmin }
            models.User.create(newUser)
                .then(() => {
                    res.status(200);
                    res.send({ userName, email })
                })
                .catch(err => {
                    console.log(err);
                    res.status(409)
                    res.send(err)
                })
        },
        login: (req, res, next) => {
            const { userName, password } = req.body;
            // console.log(`stay sined in: ${staySignedIn}`);

            models.User.findOne({ userName: { $eq: userName } })
                .then((user) => {
                    Promise.all([user, user.matchPassword(password)])
                        .then(([user, match]) => {
                            if (!match) {
                                res.status(401)
                                res.send({ message: 'Wrong username or password!', });
                                return;
                            }
                            const token = jwt.createToken({ id: user._id });
                            const userForFrontEnd = {
                                userName: user.userName,
                            }
                            console.log(userForFrontEnd);

                            res.cookie(config.cookie, token)
                                .cookie('ecom-user-info', JSON.stringify({ user }))
                                .send(user)
                        })
                }).catch(err => {
                    console.log(err);
                    res.status(401)
                    res.send({ message: 'Wrong username or password!', });
                })
        },



    }
};