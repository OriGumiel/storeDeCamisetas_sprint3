var express = require('express');
var router = express.Router();
const path = require('path'); 
const usersController = require ('../controllers/usersController')

//Middleware

const upload = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');



/* GET users listing. */

router.get('/register', guestMiddleware, usersController.register );

router.post('/registrar',upload.single('user_avatar'), validations, usersController.create );

router.get('/login', guestMiddleware, usersController.login );

router.post('/login', usersController.loginProcess );

router.get('/profile', authMiddleware, usersController.profile);

router.get("/edit/:id", usersController.edit);

router.post("/update/:id", upload.single('user_avatar'), usersController.update);

router.get('/logout', usersController.logout);

module.exports = router;