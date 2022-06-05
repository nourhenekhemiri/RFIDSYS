const Prosecurite = require('../models/prosecurite');


// get all 
exports.all = (req, res) => {
  Prosecurite.find()
    .then( prosecurites => res.status(200).json( prosecurites))
    .catch(err => res.status(400).json({error: err.message}));
};

// get  by id
exports.get = (req, res, next) => {
  Prosecurite.findOne({ _id: req.params.id })
      .then(  prosecurite => res.status(200).json(  prosecurite))
      .catch(error => res.status(404).json({ error }));
  };

  // store a new 
exports.create = (req, res, next) => {
  var file = null;
  if (req.file){
    file = req.file.filename;
  }
  const newProsecurite = new Prosecurite({
    title: req.body.title,
    description: req.body.description,
    image: file,
    price: req.body.price,
    category : req.body.category
  });
  newProsecurite.save()
    .then(() => res.status(201).json({ message: 'Produit de securite  created  !'}))
    .catch(error => res.status(400).json({ error }));
};

// update 
exports.update = (req, res, next) => {
  Prosecurite.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Produit de securite updated !'}))
    .catch(error => res.status(400).json({ error }));
};

// delete  by id
exports.delete = (req, res, next) => {
  Prosecurite.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'produit de securite  deleted !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.getByCategory = (req, res, next) => {
  Prosecurite.find({category: req.params.category})
    .then(  prosecurite => res.status(200).json(  prosecurite))
    .catch(error => res.status(404).json({ error }));
}