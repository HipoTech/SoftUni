const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
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
    cubes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cube', // Name of the model
    }],

})

class Accessoryes {
    constructor(name, description, imageUrl, cubes) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.cubes = cubes;
    }
}

const Accessorydb = mongoose.model('Accessory', accessorySchema);

module.exports = { Accessorydb, Accessoryes };
