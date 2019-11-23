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
            const { title, webId, price, imageUrl, availability, featuredItem, condition } = req.body;
            const newProduct = { title, webId, price, imageUrl, availability, featuredItem, condition }
            models.Brand.create(newProduct)
                .then(() => {
                    res.status(200);
                    res.send({ newProduct })
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
    }
};