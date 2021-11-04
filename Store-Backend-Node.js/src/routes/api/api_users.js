var express = require('express');
var router = express.Router();
const path = require('path'); 
const api_usersController = require ('../../controllers/api/api_usersController')

/* GET users listing. */
router.get('/all',api_usersController.all)
router.get('/one/:id',api_usersController.one)

module.exports = router;