var express = require('express');
var router = express.Router();
const path = require('path');

const productsController = require ('../controllers/productsController');

const multer = require('multer');
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname + '../../public/images/products'))
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  }) 
  let upload = multer({ storage: storage })


  
  router.get('/detalle/:id',productsController.detalle );
  
  router.get('/nuevoProducto',productsController.nuevo );
  router.post('/store', upload.single('images'),productsController.store); 
  router.get('/create',productsController.create); 
  
  /*** EDIT ONE PRODUCT ***/ 
  router.get('/edit/:id/', productsController.edit); 
  router.put('/edit/:id', productsController.update); 
  router.delete('/delete/:id', productsController.delete); 
  
  /* GET users listing. */
  router.get('/:category', productsController.todos );

module.exports = router;

