const models = require('../models');
// const jwt = require('../utils/jwt');
const config = require('../config/config');

module.exports = {
    get: {
        // details: (req, res, next) => {
        //     const user = req.user

        //     models.User.find(user._id)
        //         .limit(3)
        //         .then((expense) => {

        //             const hbsObject = {
        //                 pageTitle: 'User Page',
        //                 isLoggedIn: req.cookies[config.cookie] !== undefined,
        //                 expense,
        //                 user,
        //             };
        //             if (req.user) {
        //                 hbsObject.username = req.user.username
        //             }
        //             let tmp = 0;
        //             hbsObject.user.expenses.forEach(exp => {
        //                 tmp+= +exp;
        //             });
        //             hbsObject.user.expenses = tmp;
        //             res.render('user.hbs', hbsObject);
        //         })


        // },
        // login: (req, res, next) => {
        //     res.render('loginPage.hbs', { pageTitle: 'Login Page' });
        // },

        register: (req, res, next) => {
            res.render('registerPage.hbs', { pageTitle: 'Register Page' });
        },

        // logout: (req, res, next) => {
        //     res.clearCookie(config.cookie).redirect('/home');
        // }
    },

    post: {
        // login: (req, res, next) => {
        //     const { username, password } = req.body;


        //     models.User.findOne({ username }).then((user) => {
        //         Promise.all([user, user.matchPassword(password)])
        //             .then(([user, match]) => {
        //                 if (!match) {
        //                     console.log('Password is invalid');
        //                     res.render('loginPage.hbs', {
        //                         message: 'Wrong password or username!',
        //                     });
        //                     return
        //                 }

        //                 const token = jwt.createToken({ id: user._id });
        //                 res.cookie(config.cookie, token)
        //                     .redirect('/home/');

        //             })
        //     })
        // },

        register: (req, res, next) => {
            let { username, password, email, firstName, lastName } = req.body;
            if (!amount) {
                amount = 0;
            }

            models.User.create({ username, password, email, firstName, lastName })
                .then((registeredUser) => {
                    // const token = jwt.createToken({ id: registeredUser._id });
                    res
                        // .cookie(config.cookie, token)
                        .send(registeredUser);
                    // .redirect('/home/');
                })
                .catch(next)
        }
    }
};