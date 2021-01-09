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
            models.Brand.create(newBrand)
                .then(() => {
                    res.status(200);
                    res.send({ newBrand })
                })
                .catch(err => {
                    res.status(409)
                    res.send({
                        error: 'Brand already exist!',
                        serverError: err
                    })
                })
        },
        findOne: (req, res, next) => {
            const brandId = req.body.id;
            models.Brand.find({ _id: brandId })
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
            const { originalName, name, imageUrl } = req.body;
            const newBrand = { originalName, name, imageUrl };
            models.Brand.updateOne({ name: newBrand.originalName }, { name: newBrand.name, imageUrl: newBrand.imageUrl })
                .then((resp) => {
                    console.log(resp);
                    res.status(200);
                    res.send({ newBrand })
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
                _id,
            } = req.body;
            console.log(`${_id} has been deleted`);

            models.Brand.findOneAndDelete({ _id: _id })
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