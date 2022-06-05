  
    const mongoose = require('mongoose');
    const prosecuriteSchema = new mongoose.Schema({
      title: {type: String, required: true},
      description: {type: String, required: false},
      image: {type: String, required: true},
      price: {type: Number, required: true},
      category : {type: String, required: true},
      nb_achat : {type: Number, required: true, default: 0},
      });
      
    module.exports = mongoose.model('Prosecurite', prosecuriteSchema,'prosecurites');