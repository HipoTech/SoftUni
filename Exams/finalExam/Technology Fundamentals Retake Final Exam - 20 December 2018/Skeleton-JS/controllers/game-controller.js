const Game = require('../models/Game');

module.exports = {
  getIndex: function (req, res) {
    Game.find({})
      .then((games) => {
        return res.render('index', { games })
      })
  },
  getCreate: function (req, res) {
    return res.render('create')
  },
  postCreate: function (req, res) {
    Game.create(req.body)
      .then(() => {
        return res.redirect('/')
      })
  },
  getEdit: function (req, res) {
    let id = req.params.id;
    Game.findById(id)
      .then((game) => {
        return res.render('edit', { game })
      })
  },
  postEdit: function (req, res) {
    let id = req.params.id;
    let newGame = req.body;
    Game.findByIdAndUpdate(id, newGame)
      .then(() => {
        return res.redirect('/')
      })
  },
  getDelete: function (req, res) {
    let id = req.params.id;
    Game.findById(id)
      .then((game) => {
        return res.render('delete', { game })
      })
  },
  postDelete: function (req, res) {
    let id = req.params.id;
    Game.findByIdAndRemove(id)
      .then(() => {
        return res.redirect('/')
      })
  }
};