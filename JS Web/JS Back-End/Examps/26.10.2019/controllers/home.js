const config = require('../config/config');
const models = require('../models');

module.exports = {
    get: {
        home: (req, res, next) => {
            const user = req.user
            if (user) {
                models.Expenses.find({ creator: req.user._id })
                    .then((expense) => {

                        //expense = expense.filter((e) => e.creator === user._id)
                        const hbsObject = {
                            pageTitle: 'Home Page',
                            isLoggedIn: req.cookies[config.cookie] !== undefined,
                            expense,
                            user,
                        };
                        if (req.user) {
                            hbsObject.username = req.user.username
                        }
                        res.render('homePage.hbs', hbsObject);
                    })
                return;
            }
            res.render('homePage.hbs');
        }
    },
};