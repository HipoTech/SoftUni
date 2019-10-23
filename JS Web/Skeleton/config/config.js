const env = process.env.NODE_ENV || 'development';
const port = 8080;
const dbport = 27017;
const config = {
    development: {
        port: process.env.PORT || port,
        dbURL: `mongodb://localhost:${dbport}/VideoTutorials`
    },
    production: {}
};

const connection = config[env]

module.exports = {
    connection,
    dbport,
    port,
}