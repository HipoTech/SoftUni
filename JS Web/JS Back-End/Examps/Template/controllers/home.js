const moment = require('moment');
const config = require('../config/config');
const models = require('../models');

module.exports = {
    get: {
        home: (req, res, next) => {
            const user = req.user
            if (user) {
                models.Expenses
                    .find({ creator: req.user._id })
                    .then((expense) => {
                        const hbsObject = {
                            pageTitle: 'Home Page',
                            isLoggedIn: req.cookies[config.cookie] !== undefined,
                            expense,
                            user,
                        };
                        if (req.user) {
                            hbsObject.username = req.user.username
                        }
                        const event = new Date();
                        const test = new Date(Number(hbsObject.expense.date));


                        // console.log(event.toDateString());
                        console.log(moment(test, "YYYYMMDD").dayOfYear());

                        res.render('homePage.hbs', hbsObject);
                    })
                return;
            }
            res.render('homePage.hbs');
        }
    },
};