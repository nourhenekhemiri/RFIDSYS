const Rdv = require('../models/rdv');
const mail = require('../mails/mail-sender');

exports.getPending = (req, res) => {
    Rdv.find({status : 'pending'})
        .then(rdvs => res.status(200).json(rdvs))
        .catch(err => res.status(400).json({error: err.message}));
};

exports.getAccepted = (req, res) => {
    Rdv.find({status : 'accepter'})
    .then(rdvs =>res.status(200).json(rdvs))
    .catch(err => res.status(400).json({error: err.message}));
}

exports.acceptRDV = (req, res) => {
    Rdv.findByIdAndUpdate(req.params.id, {status : 'accepter'})
    .then(rdv => {
        mail.validerRDV(rdv);
        res.status(200).json(rdv)
    })
    .catch(err => res.status(400).json({error: err.message}));
}

exports.deleteRDV = (req, res) => {
    Rdv.findByIdAndDelete(req.params.id)
    .then(rdv => res.status(200).json(rdv))
    .catch(err => res.status(400).json({error: err.message}));
}

exports.getAllRdvs = (req, res) => {
    Rdv.find()
    .then(rdvs => res.status(200).json(rdvs))
    .catch(err => res.status(400).json({error: err.message}));
}

exports.addRdv = (req, res) => {
    const rdv = new Rdv({
        date : req.body.date,
        nom : req.body.nom,
        email : req.body.email,
        type : req.body.type,
    });
    rdv.save()
        .then(rdv => res.status(200).json(rdv))
        .catch(err => res.status(400).json({error: err.message}));
}