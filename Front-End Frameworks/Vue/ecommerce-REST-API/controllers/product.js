const models = require('../models');
const jwt = require('../utils/jwt');
const config = require('../config/config');

module.exports = {
    get: {
        all: (req, res, next) => {
            models.Product.find()
                .then((response) => {
                    res.status(200);
                    res.send(response);
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
                condition,
                description,
                brand,
                category,
                availability = false,
                onSlider = false,
                featuredItem = false,
                recommended = false,
            } = req.body;
            const newProduct = {
                title,
                webId,
                price,
                imageUrl,
                condition,
                description,
                brand,
                category,
                availability,
                onSlider,
                featuredItem,
                recommended,
            }
            models.Product.create(newProduct)
                .then((result) => {
                    console.log('prosuct has been created');
                    console.log(result);
                    // const productId = result._id;
                    // const productBrandId = newProduct.brand;
                    // const productCategoryId = newProduct.category;
                    // models.Category
                    //     .updateOne(
                    //         { _id: newProduct.category },
                    //         {
                    //             $push: { products: productId },
                    //         }
                    //     )
                    //     .updateOne(
                    //         { _id: newProduct.category },
                    //         {
                    //             $push: { brands: productBrandId }
                    //         }
                    //     )

                    //     .catch(err => console.log(err))
                    // models.Brand
                    //     .updateOne(
                    //         { _id: newProduct.brand },
                    //         {
                    //             $push: { products: productId },
                    //         }
                    //     )
                    //     .updateOne(
                    //         { _id: newProduct.brand },
                    //         {
                    //             $push: { categories: productCategoryId }
                    //         }
                    //     )
                    //     .catch(err => console.log(err))
                    res.status(200);
                    res.send({ result })
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
    },

    put: {
        edit: (req, res, next) => {
            const {
                title,
                webId,
                price,
                imageUrl,
                condition,
                description,
                brand,
                category,
                availability,
                onSlider,
                featuredItem,
                recommended,
            } = req.body;
            const newProduct = {
                title,
                webId,
                price,
                imageUrl,
                condition,
                description,
                brand,
                category,
                availability,
                onSlider,
                featuredItem,
                recommended,
            }

            models.Product.updateOne({ _id: req.body.id }, { ...newProduct })

                .then((result) => {
                    // const productId = result._id;
                    // const productBrandId = newProduct.brand;
                    // const productCategoryId = newProduct.brand;
                    // models.Category
                    //     .updateOne(
                    //         { _id: newProduct.category },
                    //         {
                    //             $push: { products: productId },
                    //             $push: { brands: productBrandId }
                    //         }
                    //     )

                    //     .catch(err => console.log(err))
                    // models.Brand
                    //     .updateOne(
                    //         { _id: newProduct.brand },
                    //         {
                    //             $push: { products: productId },
                    //             $push: { categories: productCategoryId }
                    //         }
                    //     )
                    //     .catch(err => console.log(err))
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
        deleteProduct: (req, res, next) => {
            const {
                _id,
                brand,
                category,
            } = req.body;
            console.log(req.body);
            models.Product.findOneAndDelete({ _id: _id })
                .then((result) => {
                    console.log(`${_id} has been deleted`);
                    const productId = result._id;
                    models.Category
                        .updateOne(
                            { _id: category },
                            {
                                $pull: { products: productId },
                            }
                        )

                        .catch(err => console.log(err))
                    models.Brand
                        .updateOne(
                            { _id: brand },
                            {
                                $pull: { products: productId },
                            }
                        )
                        .catch(err => console.log(err))
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