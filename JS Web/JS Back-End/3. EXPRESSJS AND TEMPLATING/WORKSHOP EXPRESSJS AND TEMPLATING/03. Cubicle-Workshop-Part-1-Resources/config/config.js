const dbport = 27017;
module.exports = {
    development: {
        port: process.env.PORT || 8080,
        dbURL: 'mongodb://localhost:27017/cube'
    },
    production: {},
    dbport
};