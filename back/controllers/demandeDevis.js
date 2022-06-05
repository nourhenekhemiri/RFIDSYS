const DemandeDevis = require('../models/demandeDevis');
const pdf = require('./../devisPDF/pdf');
const path = require('path');
const mail = require('../mails/mail-sender');
const prosecurite = require('../models/prosecurite');

exports.create = function(req, res, next) {

    for (let i = 0; i < req.body.items.length; i++) {
        prosecurite.findById(req.body.items[i]._id, function(err, item) {
            item.nb_achat = item.nb_achat + req.body.items[i].quantity;
            item.save();
        });
    }
    const demandeDevis = new DemandeDevis({
        client : req.body.client,
        items : req.body.items,
        devis : req.body.devis
    });
    demandeDevis.save(function(err, demandeDevis) {
        if (err) return next(err);
        res.json({message : "Demande ajouter avec succes"});
    });
}

exports.getAll = function(req, res, next) {
    DemandeDevis.find({etat : "En attente"}, function(err, demandeDevis) {
        if (err) return next(err);
        res.json(demandeDevis);
    }).populate('client');
}

exports.submitDevis = function(req, res, next) {
    const facture = {
        shipping: {
            name : req.body.client.name,
            adress: req.body.client.city,
            country : "Tunisia",
        },
        items : req.body.items,
        invoice_nr : req.body._id,
        subtotal : req.body.devis,
    }
    var file = path.join(__dirname, '../assets/pdf/'+req.body._id.toString() + ".pdf");
    pdf.createInvoice(facture, file);
    mail.envoyerDevis(req.body.client.name,req.body.client.email, req.body._id + ".pdf");
    DemandeDevis.findByIdAndUpdate(req.body._id, {$set: {etat : "terminer"}}, {new: true}, function(err, demandeDevis) {
        if (err) return next(err);
        res.json(demandeDevis);
    });
}

exports.getStats = (req, res, next) => {
    // get all prosecurite and sort by nb_achat desc and limit to 5
    prosecurite.find({}).sort({nb_achat : -1}).limit(5).exec(function(err, items) {
        if (err) return next(err);
        res.json(items);
    });
}