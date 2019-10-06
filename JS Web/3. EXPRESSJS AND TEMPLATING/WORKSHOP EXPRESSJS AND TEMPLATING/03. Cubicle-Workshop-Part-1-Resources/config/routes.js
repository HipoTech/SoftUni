const render = require('../controllers/render-pages');
const { createCube, deleteCube, editCube } = require('../controllers/cube-Controller');
const { createAccessory, attachAccessory } = require('../controllers/accessory-Controller');

const router = function (app) {

    app.get('/', render.home);

    // createCube
    app.get('/create', render.create);
    app.post('/create', createCube);

    // aboutCube
    app.get('/about', render.about);

    // detaiCube
    app.get('/details/:id', render.details);

    // editCube
    app.get('/edit/:id', render.editCube);
    app.post('/edit/:id', editCube);

    // deleteCube
    app.get('/delete/:id', deleteCube);

    // createAccessory
    app.get('/create/accessory', render.accessory);
    app.post('/create/accessory', createAccessory);

    // attachAccessory
    app.get('/attach/accessory/:id', render.accessoryDetails);
    app.post('/attach/accessory/:id', attachAccessory);

    // render Page Not Found
    app.use(render.pageNotFound);
}

module.exports = {
    router,
};