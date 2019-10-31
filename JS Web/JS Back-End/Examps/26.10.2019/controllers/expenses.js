const models = require('../models');
const config = require('../config/config');
const { validationResult } = require('express-validator');

module.exports = {
    get: {
        create: (req, res, next) => {

            const hbsObject = {
                pageTitle: 'Home Page',
                isLoggedIn: req.cookies[config.cookie] !== undefined,
            };
            if (req.user) {
                hbsObject.username = req.user.username
            }
            res.render('createExpensesPage.hbs', hbsObject);
        },

        details: (req, res, next) => {
            const user = req.user
            const { courseId } = req.params;

            models.Expenses.findById(courseId).then((expenses) => {

                const hbsObject = {
                    expenses,
                    user,
                    pageTitle: 'Course Details',
                    isLoggedIn: req.cookies[config.cookie] !== undefined
                }
                if (req.user) {
                    hbsObject.username = req.user.username
                }

                res.render('report.hbs', hbsObject);
            }).catch(console.log);
        },

        edit: (req, res, next) => {
            const { courseId } = req.params;

            models.Expenses.findById(courseId).then((course) => {
                const hbsObject = {
                    course,
                    isLoggedIn: req.cookies[config.cookie] !== undefined
                };
                if (req.user) {
                    hbsObject.username = req.user.username
                }
                res.render('editCoursePage.hbs', hbsObject);
            })
        },

        delete: (req, res, next) => {
            const { courseId } = req.params;

            models.Expenses.findByIdAndRemove(courseId).then((removedCourse) => {
                res.redirect('/home/');
            });
        }
    },

    post: {
        create: (req, res, next) => {

            const { merchant, description, total, category, report } = req.body;
            const date = new Date;
            const isChecked = report === 'on';
            const userId = req.user._id;

            // const errors = validationResult(req);

            // if (!errors.isEmpty()) {
            //     return res.render('createExpensesPage.hbs', {
            //         message: errors.array()[0].msg,
            //         oldInput: req.body
            //     })
            // }
            
            models.Expenses.create({ merchant, date, total, category, description , report: isChecked, creator: req.user.id })    
            .then(() => {
                models.User.updateOne({_id:userId} ,{ $push: { expenses:  total} })
                .then(() => console.log('yes')                )
            })
            .then((createdCourse) => {
                    res.redirect('/home/');
                })
        },

        edit: (req, res, next) => {

            const { courseId } = req.params;
            const { merchant, description, total, report } = req.body;
            const isChecked = report === 'on';

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.render('createExpensesPage.hbs', {
                    message: errors.array()[0].msg,
                    oldInput: req.body
                })
            }

            models.Course.findByIdAndUpdate(courseId, { merchant, description, total, report: isChecked }).then((updatedCourse) => {
                res.redirect(`/course/details/${courseId}`);
            });
        }
    }
};