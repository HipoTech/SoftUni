const models = require('../models');
const jwt = require('../utils/jwt');
const config = require('../config/config');

module.exports = {
    get: {
        all: (req, res, next) => {
            models.Category.find()
                .populate('brands')
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
            const newProduct = { name, imageUrl, products }
            models.Category.create(newProduct)
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
            const categoryId = req.body.id;
            models.Category.find({ _id: categoryId })
                .populate('products')
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
            const newCategory = { name, imageUrl, products };
            models.Category.updateOne({ name: newCategory.name }, { ...newCategory })
                .then((result) => {
                    res.status(200);
                    res.send({ newCategory })
                })
                .catch(err => {
                    console.log(err);
                    res.status(409)
                    res.send(err)
                })
        },
    },

    delete: {
        deleteCategory: (req, res, next) => {
            const {
                name,
            } = req.body;
            models.Category.findOneAndDelete({ name: name })
                .then((result) => {
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