var express = require('express');
var router = express.Router();

const productsController = require ('../controllers/productsController')

/* GET users listing. */
router.get('/', productsController.todos );

router.get('/detalle/:id',productsController.detalle );

router.get('/nuevoProducto',productsController.nuevo );

router.get('/carrito',productsController.cart );

module.exports = router;
