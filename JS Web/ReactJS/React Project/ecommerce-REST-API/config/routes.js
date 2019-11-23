const routers = require('../routers');

module.exports = (app) => {
    app.use('/api/user', routers.user);
    app.use('/api/products', routers.product);
    app.use('/api/categories', routers.category);
    app.use('/api/brands', routers.brand);

    app.use('*', (req, res, next) => {
        res.send('Not Found!')
    })
};