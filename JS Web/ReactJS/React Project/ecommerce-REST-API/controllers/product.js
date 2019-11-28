const models = require('../models');
const jwt = require('../utils/jwt');
const config = require('../config/config');

module.exports = {
    get: {
        all: (req, res, next) => {
            models.Product.find()
                .then((response) => {
                    res.status(200);
                    res.send(response)
                })
                .catch(err => {
                    console.log(err);
                    res.status(409)
                    res.send(err)
                })
        },
    },

    post: {
        create: (req, res, next) => {
            const {
                title,
                webId,
                price,
                imageUrl,
                availability,
                featuredItem,
                condition,
                brand,
                category,
            } = req.body;
            const newProduct = {
                title,
                webId,
                price,
                imageUrl,
                availability,
                featuredItem,
                condition,
                brand,
                category,
            }
            models.Product.create(newProduct)
                .then((result) => {
                    const productId = result._id;
                    models.Category.updateOne(
                        { _id: newProduct.category },
                        { $push: { products: productId } }
                    ).catch(err => console.log(err))
                    models.Brand.updateOne(
                        { _id: newProduct.brand },
                        { $push: { products: productId } }
                    ).catch(err => console.log(err))
                    res.status(200);
                    res.send({ newProduct })
                })
                .catch(err => {
                    console.log(err);
                    res.status(409)
                    res.send(err)
                })
        },
        findOne: (req, res, next) => {
            const productId = req.body.id;
            models.Product.findById(productId)
                .populate('brand')
                .populate('category')
                .then((response) => {
                    res.status(200);
                    res.send(response)
                })
                .catch(err => {
                    console.log(err);
                    res.status(409)
                    res.send(err)
                })
        },
    }
};