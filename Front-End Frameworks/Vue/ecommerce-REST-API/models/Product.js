const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const productSchema = new Schema({

    title: {
        type: String,
        required: true,
    },

    webId: {
        type: Number,
        required: true,
        unique: true
    },

    price: {
        type: Number,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    imageUrl: {
        type: String,
        required: true,
    },

    condition: {
        type: String,
        required: true,
    },

    availability: {
        type: Boolean,
        default: false,

    },

    onSlider: {
        type: Boolean,
        default: false,

    },

    featuredItem: {
        type: Boolean,
        default: false,

    },

    recommended: {
        type: Boolean,
        default: false,
    },

    brand: {
        type: ObjectId,
        ref: 'Brand',
    },

    category: {
        type: ObjectId,
        ref: 'Category',
    },
});

module.exports = new Model('Product', productSchema);