const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  author: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true,
    min: 1
  },
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;