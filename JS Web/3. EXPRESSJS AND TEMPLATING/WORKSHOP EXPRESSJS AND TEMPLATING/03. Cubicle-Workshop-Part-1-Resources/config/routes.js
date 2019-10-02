// TODO: Require Controllers...
const render = require('../controllers/render');
const createCube = require('../controllers/cube-Controller').createCube;

const router = function (app) {
    app.get('/', render.home);

    app.get('/create', render.create);
    app.post('/create', createCube);

    app.get('/about', render.about);

    app.get('/details', render.details);

    app.use(render.pageNotFound);
}

module.exports = {
    router,
};