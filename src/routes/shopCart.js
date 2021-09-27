var express = require('express');
var router = express.Router();
const path = require('path');

const shopCartController = require ('../controllers/shopCartController');


/*** GET ONE CART ***/ 
router.get('/', shopCartController.cart);

/*** ADD ONE CART ***/ 
router.post('/addProduct', shopCartController.addProduct);
router.get('/addProduct', shopCartController.productToAdd);

module.exports = router;
