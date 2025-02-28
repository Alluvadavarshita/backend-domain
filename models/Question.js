const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  category: { type: String, required: true },
  question: { type: String, required: true },
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;
