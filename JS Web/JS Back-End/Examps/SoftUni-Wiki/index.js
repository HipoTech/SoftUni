global.__basedir = __dirname;
const dbConnector = require('./config/database');

dbConnector().then(() => {
    const config = require('./config/config');
    const app = require('express')();

    require('./config/express')(app);
    require('./config/routes')(app);

    app.use(function (err, req, res, next) {
        const user = req.user;

        res.render('errors/500', { errorMessage: err.message, user })
    });

    app.listen(config.port, console.log(`Server active on port: ${config.port}_____________________________________________`));
}).catch((err) => console.error(err));


