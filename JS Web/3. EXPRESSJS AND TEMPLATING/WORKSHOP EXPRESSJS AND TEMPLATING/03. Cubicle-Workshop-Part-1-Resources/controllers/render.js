const about = require('./pages/about').renderAbougthPage;
const create = require('./pages/create').renderCreatePage;
const details = require('./pages/details').renderDetailsPage;
const home = require('./pages/home').renderHomePage;
const pageNotFound = require('./pages/404').render404Page;

module.exports = {
    about,
    create,
    details,
    home,
    pageNotFound,

}