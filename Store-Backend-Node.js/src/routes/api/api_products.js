var express = require('express');
var router = express.Router();
const path = require('path'); 
const api_productsController = require ('../../controllers/api/api_productsController')

/* GET users listing. */
router.get('/all',api_productsController.all)
router.get('/one/:id',api_productsController.one)

module.exports = router;