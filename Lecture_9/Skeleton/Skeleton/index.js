const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const routing = require('./routing');
const port = 3000;
const app = express();
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env];
require('./config/database')(config);

app.engine(".hbs", handlebars({
  extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
routing(app);

app.listen(config.port, () => console.log(`Listening on port ${config.port}...`));