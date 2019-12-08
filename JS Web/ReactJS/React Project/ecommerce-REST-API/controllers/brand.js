const models = require('../models');
const jwt = require('../utils/jwt');
const config = require('../config/config');

module.exports = {
    get: {
        all: (req, res, next) => {
            models.Brand.find()
                .then((response) => {
                    res.status(200);
                    res.send(response)
                })
                .catch(err => {
                    res.status(409)
                    res.send(err)
                })
        },
    },

    post: {
        create: (req, res, next) => {
            const { name, imageUrl, products = [] } = req.body;
            const newBrand = { name, imageUrl, products };
            console.log(newBrand);

            models.Brand.create(newBrand)
                .then(() => {
                    res.status(200);
                    res.send({ newBrand })
                })
                .catch(err => {
                    res.status(409)
                    res.send(err)
                })
        },
        findOne: (req, res, next) => {
            const productId = req.body.id;
            models.Brand.find({ _id: productId })
                .then((response) => {
                    res.status(200);
                    res.send(response)
                })
                .catch(err => {
                    res.status(409)
                    res.send(err)
                })
        },
    },

    put: {
        edit: (req, res, next) => {
            const { name, imageUrl, products = [] } = req.body;
            const newBrand = { name, imageUrl, products };
            models.Brand.updateOne({ name: newBrand.name }, { ...newBrand })
                .then((result) => {
                    console.log(req.body);
                    res.status(200);
                    res.send({ newProduct })
                })
                .catch(err => {
                    console.log(err);
                    res.status(409)
                    res.send(err)
                })
        },
    },

    delete: {
        deleteBrand: (req, res, next) => {
            const {
                name,
            } = req.body;
            models.Brand.findOneAndDelete({ name: name })
                .then((result) => {
                    console.log('deleted');

                    res.status(200);
                })
                .catch(err => {
                    console.log(err);
                    res.status(409)
                    res.send(err)
                })
        }
    }
};