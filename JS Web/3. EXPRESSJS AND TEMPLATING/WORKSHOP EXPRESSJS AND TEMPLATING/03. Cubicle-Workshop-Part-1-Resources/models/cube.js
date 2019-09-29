const len = require('../config/database').length;

class Cube {
    constructor(name, description, imageUrl, difficultyLevel) {
        this.id = len + 1;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficultyLevel = difficultyLevel;
    }
}

module.exports = {
    Cube,
}
