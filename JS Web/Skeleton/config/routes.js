// TODO: Require Controllers...
const courseController = require('../controllers/course');
const {
    renderLogin,
    loginUser,
    renderRegister,
    registerUser,
    logout,
    deleteLecture,
    renderAttachLecture,
    createLecture,

} = require('../controllers/pages');
const { auth } = require('../utils');

module.exports = (app) => {
    // Main pages
    app.get('/', auth(false), courseController.get.homePage);
    app.get('/about', courseController.get.about);

    // Lectures
    app.get('/addLecture/:id', auth(), renderAttachLecture);
    app.post('/addLecture/:id', auth(), createLecture);

    app.get('/delete/lecture/:id', auth(), deleteLecture);

    // Courses
    app.get('/details/:id', auth(false), courseController.get.details)

    app.get('/create', auth(), courseController.get.create);
    app.post('/create', auth(), courseController.post.create);

    app.get('/edit/:id', auth(), courseController.get.edit);
    app.post('/edit/:id', auth(), courseController.post.submitEdit);

    app.get('/delete/:id', auth(), courseController.get.delete);
    app.post('/delete/:id', auth(), courseController.post.delete);

    //User
    app.get('/login', renderLogin);
    app.post('/login', loginUser);

    app.get('/register', renderRegister);
    app.post('/register', registerUser);

    app.get('/logout', logout);

    // Not found
    app.get('/not-found', courseController.get.notFound);
    app.get('*', (req, res) => { res.render('404.hbs'); });
};