const home = require('./home').renderHomePage;
const about = require('./about').renderAbougthPage;
const pageNotFound = require('./404').render404Page;

// cubes
const create = require('./cubes/create-cube').renderCreatePage;
const editCube = require('./cubes/edit-cube').renderEditPage;
const details = require('./cubes/details-cube').renderDetailsPage;

// accessories
const accessory = require('./accessories/create-accessory').renderCreateAccessory;
const accessoryDetails = require('./accessories/details-accessory').renderDetailsPage;

// users
const login = require('./users/login').renderLoginPage;
const register = require('./users/register').renderRegisterPage;


module.exports = {
    about,
    create,
    details,
    home,
    pageNotFound,
    accessory,
    accessoryDetails,
    editCube,
    login,
    register,

}