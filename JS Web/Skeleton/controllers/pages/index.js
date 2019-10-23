const homePage = require('./home').homePage;
const { edit, submitEdit } = require('./course');
const { renderAttachLecture, createLecture, attachLecture, deleteLecture } = require('./lecture');
const { renderLogin, loginUser, renderRegister, registerUser, logout } = require('./user');

module.exports = {
    homePage,
    renderLogin,
    loginUser,
    renderRegister,
    registerUser,
    logout,
    edit,
    submitEdit,
    renderAttachLecture,
    createLecture,
    attachLecture,
    deleteLecture,

}