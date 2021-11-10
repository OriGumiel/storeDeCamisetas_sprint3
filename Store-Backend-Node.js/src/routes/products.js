var express = require('express');
var router = express.Router();
const path = require('path');

const validationsCreate = require('../middlewares/createProductValidation');
const validationsEdit = require('../middlewares/editProductValidation');

const productsController = require ('../controllers/productsController');

const multer = require('multer');
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname + '../public/images/products'))
    },
    filename: function (req, file, cb) {
      let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
      cb(null, fileName); 
    }
  }) 
  let upload = multer({ storage: storage })


  
  router.get('/detalle/:id',productsController.detalle );

 /*** CREATE product ***/  
  router.get('/newProduct',productsController.getForm );
  router.post('/store', upload.single('image'), productsController.store); 
  router.post('/create', upload.array('image', 6), validationsCreate, productsController.create); 
  
  /*** EDIT product ***/ 
  router.get('/edit/:id/', productsController.edit); 
  router.put('/edit/:id', upload.single('image'), validationsEdit, productsController.update); 
  router.delete('/delete/:id', productsController.delete); 
  
  /* GET users listing. */
  router.get('/:category', productsController.todos );

module.exports = router;

