const express = require('express');
const config = require('../config/config');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// const handlebars = require('express-handlebars');

module.exports = (app) => {
    // app.engine('hbs', handlebars({
    //     layoutsDir: 'views',
    //     defaultLayout: 'main-layout',
    //     partialsDir: 'views/partials',
    //     extname: 'hbs'
    // }));

    // app.use((req, res, next) => {
    //     if (req.cookies) {
    //         res.locals.isLoggedIn = req.cookies[config.cookie] !== 'undefined';
    //     }
    //     if (req.user) {
    //         res.locals.username = req.user;
    //         console.log(req.user);
    //     }
    //     next();
    // });

    // app.set('view engine', 'hbs');

    // app.use(express.static('./static'));

    app.use((err, req, res, next) => {
        console.error(err)
        res.status(500)
            .send(`Server Error!`)
    })

    // app.use(cookieParser());

    // app.use(bodyParser.urlencoded({ extended: true }));
};