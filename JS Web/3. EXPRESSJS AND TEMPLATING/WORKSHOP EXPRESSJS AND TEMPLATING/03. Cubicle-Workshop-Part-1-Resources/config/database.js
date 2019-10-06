const mongoose = require('mongoose');
const { dbport } = require('./config');

module.exports = config => {
    mongoose.connect(config.dbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then((data) => {
            console.log(`Database connected on ${dbport}!`);
        })
        .catch((error) => {
            console.log('Database Error detected:');
            console.log(error);
        });
};