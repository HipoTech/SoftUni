const models = require('../models');
const jwt = require('../utils/jwt');
const config = require('../config/config');

module.exports = {
    get: {
        userInfo: (req, res, next) => {
            console.log(req.params);
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
            const { username, password } = req.body;
            models.User.findOne({ username }).then((user) => {
                Promise.all([user, user.matchPassword(password)])
                    .then(([user, match]) => {
                        if (!match) {
                            res.status(401)
                            res.send({ message: 'Wrong username or password!', });
                            return;
                        }
                        const token = jwt.createToken({ id: user._id });
                        res.cookie(config.cookie, token)
                        res.cookie('ecom-user-info', {
                            userName: user.userName,
                            email: user.email,
                            imageUrl: user.umageUrl,
                            isAdmin: user.isAdmin,
                        })
                            .sendStatus(200)
                    })
            })
        }
    }
};