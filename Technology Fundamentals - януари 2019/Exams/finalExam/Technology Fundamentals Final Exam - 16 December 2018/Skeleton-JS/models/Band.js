const mongoose = require('mongoose');

const bandSchema = new mongoose.Schema({
  // TODO:
  name: {
    type: String,
    required: true
  },
  members: {
    type: String,
    required: true
  },
  honorarium: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
    required: true
  }
});

const Band = mongoose.model('Band', bandSchema);
module.exports = Band;