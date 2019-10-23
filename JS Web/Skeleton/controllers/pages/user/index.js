const { renderLogin, loginUser } = require('./login');
const { renderRegister, registerUser } = require('./register');
const logout = require('./logout').logout;

module.exports = {
    renderLogin,
    loginUser,
    renderRegister,
    registerUser,
    logout,

}