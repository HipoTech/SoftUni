const Book = require('../models/Book');

module.exports = {
  getIndex: function (req, res) {
    Book
      .find({})
      .then((books) => {
        console.log(books);
        return res.render('index', { books: books })
      })
  },
  getCreate: function (req, res) {
    return res.render('create')
  },
  postCreate: function (req, res) {
    let book = req.body;
    Book
      .create(book)
      .then(() => {
        return res.redirect('/');
      })
  },
  getEdit: function (req, res) {
    let bookForEddit = req.params.id;
    Book
      .findById(bookForEddit)
      .then((book) => {
        return res.render('edit', { book });
      })
  },
  postEdit: function (req, res) {
    let bookForEddit = req.params.id;
    let newBook = req.body;
    Book
      .findByIdAndUpdate(bookForEddit, newBook)
      .then((book) => {
        return res.redirect('/');
      })
  },
  getDelete: function (req, res) {
    let bookForEddit = req.params.id;
    Book
      .findById(bookForEddit)
      .then((book) => {
        return res.render('delete', { book });
      })
  },
  postDelete: function (req, res) {
    let bookForEddit = req.params.id;
    Book
      .findByIdAndRemove(bookForEddit)
      .then((book) => {
        return res.redirect('/');
      })
  }
};