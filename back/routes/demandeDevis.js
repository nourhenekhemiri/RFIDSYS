const express = require('express');
const router = express.Router();
const demandeDevisController = require('../controllers/demandeDevis');

router.post('',demandeDevisController.create);
router.get('/getAll',demandeDevisController.getAll);
router.post('/submitDevis',demandeDevisController.submitDevis);
router.get('/getStats',demandeDevisController.getStats);
module.exports = router;
