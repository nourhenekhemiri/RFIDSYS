const Securite = require('../models/securite');


// get all 
exports.all = (req, res) => {
  Securite.find()
    .then( securites => res.status(200).json( securites))
    .catch(err => res.status(400).json({error: err.message}));
};

// get  by id
exports.get = (req, res, next) => {
  Securite.findOne({ _id: req.params.id })
      .then( securite => res.status(200).json( securite))
      .catch(error => res.status(404).json({ error }));
  };

  // store a new 
exports.create = (req, res, next) => {
  const securite = new  Securite({
    ...req.body
  });
  securite.save()
    .then(() => res.status(201).json({ message: 'Produit  created  !'}))
    .catch(error => res.status(400).json({ error }));
};

// update 
exports.update = (req, res, next) => {
  Securite.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Produit updated !'}))
    .catch(error => res.status(400).json({ error }));
};

// delete  by id
exports.delete = (req, res, next) => {
  Securite.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Produit  deleted !'}))
    .catch(error => res.status(400).json({ error }));
};
