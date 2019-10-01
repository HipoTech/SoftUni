const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const dataBaseURL = 'mongodb://localhost:27017';
const client = new MongoClient(dataBaseURL);
client.connect({ useNewUrlParser: true }, function (err) {
    if (err) {
        throw new Error(err);
    } else {
        console.log(`Connected to DataBase ${dataBaseURL} !`);

    }
});

module.exports = {
    development: {
        port: process.env.PORT || 8080
    },
    production: {}
};