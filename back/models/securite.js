const mongoose = require('mongoose');

const securiteSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  image: {type: String, required: true},

  price: {type: String, required: true},
});

module.exports = mongoose.model('Securite', securiteSchema);