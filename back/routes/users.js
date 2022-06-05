const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../assets/users/'));
    },
    filename: function (req, file, cb) {
        if (file) {
            const name = file.originalname.toLowerCase().split(' ').join('-');
            cb(null, Date.now()+ '-' +name);         
        }
    }
});

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/profile/:id',  userController.profile);
router.put('/profile/update/:id',multer({storage:storage}).single("image"),(req,res,next)=>{userController.updateProfile(req,res,next);});
router.get('/getPendingUsers',userController.getPendingUsers);
router.put('/acceptRequest/:id', userController.acceptRequest);
router.delete('/refuserRequest/:id', userController.refuserRequest);
router.get('/getAllUsers', userController.getAllUsers);
router.delete('/deleteUser/:id', userController.deleteUser);
module.exports = router;