const about = require('./pages/about').renderAbougthPage;
const create = require('./pages/create-cube').renderCreatePage;
const accessory = require('./pages/create-accessory').renderCreateAccessory;
const accessoryDetails = require('./pages/details-accessory').renderDetailsPage;
const details = require('./pages/details-cube').renderDetailsPage;
const home = require('./pages/home').renderHomePage;
const pageNotFound = require('./pages/404').render404Page;

module.exports = {
    about,
    create,
    details,
    home,
    pageNotFound,
    accessory,
    accessoryDetails,

}