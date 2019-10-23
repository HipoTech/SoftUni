const mongoose = require('mongoose');

const lectureSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  videoUrl: {
    type: String,
    required: true
  },
  course: { type: mongoose.Types.ObjectId, ref: 'Course' },
});

module.exports = mongoose.model('Lecture', lectureSchema);