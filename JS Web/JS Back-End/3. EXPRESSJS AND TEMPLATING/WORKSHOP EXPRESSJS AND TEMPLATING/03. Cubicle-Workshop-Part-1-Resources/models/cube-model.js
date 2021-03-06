const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
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
    difficultyLevel: {
        type: Number,
        required: true,
    },
    accessories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Accessory', // Name of the model
    }],

})

class Cubicle {
    constructor(name, description, imageUrl, difficultyLevel) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficultyLevel = difficultyLevel;
        this.accessories = [];
    }
}

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = { Cube, Cubicle };
