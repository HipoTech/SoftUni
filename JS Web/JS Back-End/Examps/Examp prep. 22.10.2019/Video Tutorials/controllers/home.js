const config = require('../config/config');
const models = require('../models');

module.exports = {
    get: {
        home: (req, res, next) => {
            models.Course.find()
                .limit(3)
                .then((courses) => {
                    const hbsObject = {
                        pageTitle: 'Home Page',
                        isLoggedIn: req.cookies[config.cookie] !== undefined,
                        courses,
                    };
                    if (req.user) {
                        hbsObject.username = req.user.username
                    }
                    res.render('homePage.hbs', hbsObject);
                })

        }
    },
};