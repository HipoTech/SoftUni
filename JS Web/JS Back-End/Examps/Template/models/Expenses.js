const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const {
    String,
    Number,
    Boolean,
    ObjectId,
    Date
} = Schema.Types;

const expensesSchema = new Schema({

    merchant: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true,
        // default: Date.now,
        // format: "%G-%m-%d %H:%M:%S"
    },

    total: {
        type: Number,
        required: true,
    },

    category: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true,
        minlength: [10, 'Description should be at least 20 characters'],
        maxlength: [50, 'Description should be at least 20 characters'],
    },

    report: {
        type: Boolean,
        required: true,
        default: false,
    },

    creator: {
        type: ObjectId,
        required: true
    }

});

module.exports = new Model('Expenses', expensesSchema);