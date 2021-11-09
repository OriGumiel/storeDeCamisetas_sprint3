var express = require('express');
var router = express.Router();
const path = require('path'); 
const adminController = require ('../controllers/adminController')

//Middleware

// const upload = require('../middlewares/multerMiddleware');
// const validations = require('../middlewares/validateRegisterMiddleware');
// const guestMiddleware = require('../middlewares/guestMiddleware');
// const authMiddleware = require('../middlewares/authMiddleware');


/* GET users listing. */

router.get('/admin', adminController.admin);

module.exports = router;