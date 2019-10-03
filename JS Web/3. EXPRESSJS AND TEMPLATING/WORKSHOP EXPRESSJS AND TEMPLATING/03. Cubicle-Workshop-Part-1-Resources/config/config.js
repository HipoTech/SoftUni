const dbport = 27017;
module.exports = {
    development: {
        port: process.env.PORT || 8080,
        dbURL: 'mongodb://192.168.0.103:27017/cube'
    },
    production: {},
    dbport
};