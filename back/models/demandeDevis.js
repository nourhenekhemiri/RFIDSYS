const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const demandeDevisSchema = new mongoose.Schema({
    client : {type : Schema.Types.ObjectId, required: false,ref:"User"},
    items : {type: Array, required: true},
    devis : {type: Number, required: true},
    etat : {type: String, required: true , default : "En attente"},
});
module.exports = mongoose.model('DemandeDevis', demandeDevisSchema );
