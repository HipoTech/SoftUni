const mongoose = require('mongoose');
const { dbport } = require('./config');

module.exports = config => {
    mongoose.connect(config.dbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log(`Database connected on port ${dbport}!`);
        })
        .catch((error) => {
            console.log('Database Error detected:');
            console.log(error);
        });
};