// TODO: Require Controllers...
const render = require('../controllers/render');
const createCube = require('../controllers/cube-Controller').createCube;
const createAccessory = require('../controllers/accessory-Controller').createAccessory;

const router = function (app) {
    app.get('/', render.home);

    app.get('/create', render.create);
    app.post('/create', createCube);

    app.get('/about', render.about);

    app.get('/details/:id', render.details);

    app.get('/create/accessory', render.accessory);
    app.post('/create/accessory', createAccessory);
    // app.get('/create/accessory/:id', render.accessoryDetails);

    app.use(render.pageNotFound);
}

module.exports = {
    router,
};