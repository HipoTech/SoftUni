const mongoose = require('mongoose');

const mountaineerSchema = new mongoose.Schema({
    //TODO
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    lastSeenDate: {
        type: String,
        required: true
    },
});

const Mountaineer = mongoose.model('Mountaineer', mountaineerSchema);
module.exports = Mountaineer;

// ⦁	name – non-empty text
// ⦁	age – non-null integer number
// ⦁	gender – non-empty text
// ⦁	lastSeenDate – non-empty text
