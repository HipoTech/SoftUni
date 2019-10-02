global.__projectDir = __dirname;
const env = process.env.NODE_ENV || 'development';

const config = require('./config/config')[env];
const app = require('express')();

require('./config/express').setup(app);
require('./config/routes').router(app);
require('./config/database')(config);

app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));