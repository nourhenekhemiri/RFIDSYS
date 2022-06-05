const mongoose = require('mongoose');

const rdvSchema = new mongoose.Schema({
    nom : {type: String, required: true},
    email : {type: String, required: true},
    date : {type: String, required: true},
    type : {type: String, required: true},
    status : {type: String, required: true , default : 'pending'},
});

module.exports = mongoose.model('Rdv', rdvSchema );
