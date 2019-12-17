const routers = require('../routers');

module.exports = (app) => {
    app.use('/', routers.home);
    app.use('/home', routers.home);

    app.use('/user', routers.user);

    app.use('/expenses', routers.expenses);

    app.use('*', (req, res, next) => {
        res.render('404.hbs')
    })
};