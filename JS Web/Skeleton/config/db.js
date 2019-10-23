const { connection, dbport } = require('./config');
const mongoose = require('mongoose');

module.exports = () => {
  return mongoose.connect(connection.dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
    .then(console.log(`Database connected on port ${dbport}!`))
    ;
};