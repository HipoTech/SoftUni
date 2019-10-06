// TODO: Require Controllers...
const render = require('../controllers/render');
const { createCube, deleteCube } = require('../controllers/cube-Controller');
const { createAccessory, attachAccessory } = require('../controllers/accessory-Controller');

const router = function (app) {
    app.get('/', render.home);

    app.get('/create', render.create);
    app.post('/create', createCube);

    app.get('/about', render.about);

    app.get('/details/:id', render.details);

    app.get('/delete/:id', deleteCube);

    app.get('/create/accessory', render.accessory);
    app.post('/create/accessory', createAccessory);

    app.get('/attach/accessory/:id', render.accessoryDetails);
    app.post('/attach/accessory/:id', attachAccessory);

    app.use(render.pageNotFound);
}

module.exports = {
    router,
};