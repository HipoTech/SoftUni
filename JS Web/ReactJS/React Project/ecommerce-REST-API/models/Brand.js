const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const brandSchema = new Schema({

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
        // unique: true,
    }],
});

module.exports = new Model('Brand', brandSchema);