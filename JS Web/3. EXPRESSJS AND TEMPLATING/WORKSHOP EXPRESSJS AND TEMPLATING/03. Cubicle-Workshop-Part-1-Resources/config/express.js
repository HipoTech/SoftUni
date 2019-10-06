const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const setup = function (app) {

    // Setup the view engine
    app.engine('.hbs', handlebars({ extname: '.hbs', defaultLayout: false }));
    app.set('view engine', '.hbs');

    // Setup the body parser
    app.use(bodyParser.urlencoded({ extended: false }));

    // Setup the static files
    app.use(express.static(path.resolve(__projectDir, 'static')));
}

module.exports = {
    setup,
};