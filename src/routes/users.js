var express = require('express');
var router = express.Router();
const path = require('path'); 
const usersController = require ('../controllers/usersController')

//Middleware

//const upload = require('../middlewares/multerMiddleware');
//const validations = require('../middlewares/validateRegisterMiddleware');
//const guestMiddleware = require('../middlewares/guestMiddleware');
//const authMiddleware = require('../middlewares/authMiddleware');



/* GET users listing. */

//router.get('/login', guestMiddleware, usersController.login );
router.get('/login', usersController.login );
// router.post('/login', usersController.loginProcess );
router.get('/register', usersController.register );
//router.get('/register',guestMiddleware, usersController.register );
//router.post('/register',upload.single('user-avatar'), validations, usersController.create );
router.post('/registrar', usersController.create);

//router.get('/profile',authMiddleware, usersController.profile);
router.get('/profile', usersController.profile);

router.get('/logout', usersController.logout);



router.get('/profile', usersController.profile );


module.exports = router;