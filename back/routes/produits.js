const express = require('express');
const router = express.Router();

const ProduitController = require('./../controllers/Produit')

router.get('/', ProduitController.all);
router.get('/:id', ProduitController.get);
router.post('/create', ProduitController.create);
router.put('/:id', ProduitController.update);
router.delete('/:id', ProduitController.delete);

module.exports = router;

