const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, ObjectId } = Schema.Types;

const categorySchema = new Schema({

    name: {
        type: String,
        required: true,
        unique: true,
    },

    imageUrl: {
        type: String,
        required: true,
    },

    products: [{
        type: ObjectId,
        ref: 'Product'
        // unique: true,
    }],

    brands: [{
        type: ObjectId,
        ref: 'Brand',
        unique: true,
    }],

});

module.exports = new Model('Category', categorySchema);