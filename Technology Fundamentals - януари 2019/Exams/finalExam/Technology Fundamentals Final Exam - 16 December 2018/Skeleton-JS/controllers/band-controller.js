const Band = require('../models/Band');

module.exports = {
  getIndex: function (req, res) {
    Band.find()
      .then((bands) => {
        return res.render('index', { bands })
      })
  },
  getCreate: function (req, res) {
    return res.render('create')
  },
  postCreate: function (req, res) {
    let newBand = req.body;
    Band.create(newBand).then(() => {
      return res.redirect('/');
    })
  },
  getEdit: function (req, res) {
    let bandToEdit = req.params.id;
    Band.findById(bandToEdit)
      .then((band) => {
        return res.render('edit', { band })
      })
  },
  postEdit: function (req, res) {
    let bandToEdit = req.params.id;
    let newBand = req.body;
    Band.findByIdAndUpdate(bandToEdit, newBand)
      .then(() => {
        return res.redirect('/');
      })
  },
  getDelete: function (req, res) {
    let bandToEdit = req.params.id;
    Band.findById(bandToEdit)
      .then((band) => {
        return res.render('delete', { band })
      })
  },
  postDelete: function (req, res) {
    let bandToEdit = req.params.id;
    Band.findByIdAndRemove(bandToEdit)
      .then(() => {
        return res.redirect('/');
      })
  }
};