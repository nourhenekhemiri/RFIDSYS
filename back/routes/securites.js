const express = require('express');
const router = express.Router();

const SecuriteController = require('../controllers/securite')


router.get('/', SecuriteController.all);
router.get('/:id', SecuriteController.get);
router.post('/', SecuriteController.create);
router.put('/:id', SecuriteController.update);
router.delete('/:id', SecuriteController.delete);

module.exports = router;