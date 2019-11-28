const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

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

});

module.exports = new Model('Category', categorySchema);