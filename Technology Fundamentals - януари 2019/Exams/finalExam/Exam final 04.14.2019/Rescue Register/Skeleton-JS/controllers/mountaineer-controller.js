const Mountaineer = require('../models/Mountaineer');

module.exports = {
    getIndex: function (req, res) {
        Mountaineer.find({})
            .then((mountaineers) => {
                return res.render('index', { mountaineers })
            })
    },
    getCreate: function (req, res) {
        return res.render('create')
    },
    postCreate: function (req, res) {
        let person = req.body;
        Mountaineer.create(person)
            .then(() => {
                return res.redirect('/')
            })
    },
    getEdit: function (req, res) {
        let itemForEddit = req.params.id;
        Mountaineer
            .findById(itemForEddit)
            .then((mountaineer) => {
                return res.render('edit', { mountaineer });
            })
    },
    postEdit: function (req, res) {
        let itemForEddit = req.params.id;
        let redactedItem = req.body;
        Mountaineer
            .findByIdAndUpdate(itemForEddit, redactedItem)
            .then(() => {
                return res.redirect('/')
            })
    },
    getDelete: function (req, res) {
        let itemForEddit = req.params.id;
        Mountaineer
            .findById(itemForEddit)
            .then((mountaineer) => {
                return res.render('delete', { mountaineer });
            })
    },
    postDelete: function (req, res) {
        let itemForEddit = req.params.id;
        Mountaineer
            .findByIdAndRemove(itemForEddit)
            .then(() => {
                return res.redirect('/')
            })
    }
};