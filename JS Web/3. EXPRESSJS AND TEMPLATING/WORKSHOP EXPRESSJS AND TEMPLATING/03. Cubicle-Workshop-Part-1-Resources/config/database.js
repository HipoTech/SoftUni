const mongoose = require('mongoose');
const dbport = require('./config').dbport;

module.exports = config => {
    mongoose.connect(config.dbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then((data) => {
            console.log(`Database connected on ${dbport}!`);
        })
        .catch((error) => {
            console.log('something has go to hell:');
            console.log(error);
        });
};