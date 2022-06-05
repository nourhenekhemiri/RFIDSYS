const express = require('express');
const router = express.Router();

const ProsecuriteController = require('../controllers/prosecurite')
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../assets/produits/'));
    },
    filename: function (req, file, cb) {
        if (file) {
            const name = file.originalname.toLowerCase().split(' ').join('-');
            cb(null, Date.now()+ '-' +name);         
        }
    }
});

router.get('/', ProsecuriteController.all);
router.get('/:id', ProsecuriteController.get);
router.post('/',multer({storage:storage}).single("image"), (req,res,next)=>{ProsecuriteController.create(req,res,next);});
router.put('/:id', ProsecuriteController.update);
router.delete('/:id', ProsecuriteController.delete);
router.get('/getByCategory/:category', ProsecuriteController.getByCategory);

module.exports = router;