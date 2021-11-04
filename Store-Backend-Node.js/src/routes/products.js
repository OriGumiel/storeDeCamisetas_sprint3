var express = require('express');
var router = express.Router();
const path = require('path');

const validationsCreate = require('../middlewares/createProductValidation');
const validationsEdit = require('../middlewares/editProductValidation');

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

 /*** CREATE product ***/  
  router.get('/newProduct',productsController.getForm );
  router.post('/store', upload.single('images'), productsController.store); 
  router.post('/create', upload.single('images'), validationsCreate, productsController.create); 
  
  /*** EDIT product ***/ 
  router.get('/edit/:id/', productsController.edit); 
  router.put('/edit/:id', upload.single('images'), validationsEdit, productsController.update); 
  router.delete('/delete/:id', productsController.delete); 
  
  /* GET users listing. */
  router.get('/:category', productsController.todos );

module.exports = router;

