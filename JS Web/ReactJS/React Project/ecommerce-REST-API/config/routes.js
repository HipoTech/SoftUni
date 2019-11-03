const routers = require('../routers');

module.exports = (app) => {
    app.use('/api/user', routers.user);

    app.use('*', (req, res, next) => {
        res.send('Not Found!')
    })
};