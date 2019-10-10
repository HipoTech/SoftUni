const home = require('./pages/home').renderHomePage;
const about = require('./pages/about').renderAbougthPage;
const pageNotFound = require('./pages/404').render404Page;

// cubes
const create = require('./pages/cubes/create-cube').renderCreatePage;
const editCube = require('./pages/cubes/edit-cube').renderEditPage;
const details = require('./pages/cubes/details-cube').renderDetailsPage;

// accessories
const accessory = require('./pages/accessories/create-accessory').renderCreateAccessory;
const accessoryDetails = require('./pages/accessories/details-accessory').renderDetailsPage;

// users
const login = require('./pages/users/login').renderLoginPage;
const register = require('./pages/users/register').renderRegisterPage;


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