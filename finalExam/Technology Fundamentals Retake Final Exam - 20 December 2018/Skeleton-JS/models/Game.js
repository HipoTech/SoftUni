const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  // TODO:
});

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;