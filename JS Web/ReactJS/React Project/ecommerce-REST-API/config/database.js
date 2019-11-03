const mongoose = require('mongoose');
const config = require('./config');
const dbName = 'ecommerce';

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

module.exports = () => {
    return mongoose.connect(config.dbURL + dbName, { useNewUrlParser: true, useUnifiedTopology: true },
        console.log('Database connected!_____________________________________________'));
};