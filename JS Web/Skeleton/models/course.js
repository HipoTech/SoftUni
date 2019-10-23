const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    validate: [
      {
        validator: function (v) {
          return v.length < 50;
        },
        message: props => `${props.value} length should be less then 50!`
      },
    ]
  },
  imageUrl: {
    type: String,
    required: true,
  },
  isPublic: {
    type: Boolean,
    default: false
  },
  lectures: [{ type: mongoose.Types.ObjectId, ref: 'Lecture' }],
  enrolled: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Course', courseSchema);