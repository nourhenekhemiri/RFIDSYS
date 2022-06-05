const express = require('express');
const router = express.Router();

const rdvController = require('../controllers/rdv');

router.get('/getPending', rdvController.getPending);
router.get('/getAccepted', rdvController.getAccepted);
router.put('/acceptRDV/:id', rdvController.acceptRDV);
router.delete('/deleteRDV/:id', rdvController.deleteRDV);
router.get('/getAllRdvs', rdvController.getAllRdvs);
router.post('/addRdv', rdvController.addRdv);


module.exports = router;