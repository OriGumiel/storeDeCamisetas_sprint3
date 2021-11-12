const fs = require('fs');
const path = require('path');
const db = require('../database/models')
const sequelize = db.sequelize 

const productsFilePath = path.join(__dirname, '../data/Productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const { validationResult } = require("express-validator");
const Product_image = require('../database/models/Product_image');
const { Console } = require('console');

const productsController = {
    todos: function(req, res, next) {
      let category = req.params.category;
      let equipo = products.filter(element => element.category === category);
      
        res.render('products/productsAll',{
          title: 'Todos los productos de nuestro Store',
          style: '/stylesheets/productos.css',
          equipo: equipo    //(esto esta bien asi?????)
        });
      },

    // detalle: function(req, res, next) {
    //     res.render('products/productsDetail',{title: 'Estas accediendo al detalle de un producto',
    //     style: '/stylesheets/styles.css',
    //   });
    //   },

    detalle:(req,res) =>{
      //CON JSON: let prendas = JSON.parse(fs.readFileSync(productsDatos,'utf-8'));
       //let id = req.params.id;
      //let unProducto= prendas.find(element => element.id == id);
      //res.render('products/detail', {product: unProducto} 
      db.Product.findByPk(req.params.id,{
          include:[{association:"product_images"}
          ]
      })
      .then(function(product){
          res.render('products/productsDetail', {productDetail : product})
      })
  },



    getForm: function(req, res, next) {
        res.render('products/productsNew',{title: 'Creaste un nuevo producto',
        style: '/stylesheets/productsNew.css',
      });
      },


    
    // store: (req, res) => {
        
    //     let nuevoId = products[products.length - 1].id + 1;
        
    //     let nuevoProducto = {
    //         id: nuevoId,
    //         name: req.body.name,
    //         price: req.body.price,
    //         category: req.body.category,
    //         talle: req.body.talle,
    //         color: req.body.color,
    //         esNovedad: req.body.esNovedad,
    //         description: req.body.description,            
    //         image: req.file.originalname,
    //     }

    //     products.push(nuevoProducto);
    //     fs.writeFileSync(productsFilePath, JSON.stringify(products));
    //     res.redirect('/products/nuevoProducto')
    // },

    create: async (req,res) => {
      
        let newProduct = await db.Product.create({
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          category: req.body.category,
          
        })
        // IMAGES
      // con req.files accedemos a todos los file mandados y guardados en array. Solo queremos el nombre así que creamos nuevo array donde los pushearemos
      
      // const files = req.files;
      // const imagesMapped = files.map ((image) => image.image);
      // const imageStrings = JSON.stringify(imagesMapped)

      // const images = await db.Product_images.create({
      //   image: imageStrings
      // })
      // await newProduct.setImages (images.id, newProduct.id)
      let imagenes = [];
      for (i = 0; i < req.files.length; i++) {
        imagenes.push(req.files[i].filename);
      }
      for (i = 0; i < imagenes.length; i++) {
      //   // ahora con uuid ya no son 2 iguales y creara tantas imagenes como haya en el array
        await db.Product_images.create({ image: imagenes[i], product_id: newProduct.id });
      }
      
       
        // res.send(req.body)
        return res.redirect('/');
        
       

    },

    // Update - Form to edit
    edit: (req, res) => {
      let id = req.params.id;
      db.Product.findByPk(id)
      .then((product) => {
        return res.render("products/product-edit-form", { productToEdit : product});
      })
      .catch((e) => {
        console.log(e);
      }); 
      // let productToEdit =  products.find(element => element.id == id);
      // res.render('products/product-edit-form', {productToEdit: productToEdit,
      // style: '/stylesheets/productsNew.css'});
    },
    
    // Update - Method to update
    update: async (req, res) => {      
      let productEdit = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        // image: req.file.filename        
      }

      await db.Product.update(productEdit, { where: { id: req.params.id } });
        

      // let imagenesEdit = [];
      //   for (i = 0; i < req.files.length; i++) {
      //     imagenesEdit.push(req.files[i].filename);
      //   }
      //   for (i = 0; i < imagenesEdit.length; i++) {
      //   //   // ahora con uuid ya no son 2 iguales y creara tantas imagenes como haya en el array
      //     await db.Product_images.update(imagenesEdit[i], { where: { product_id: req.params.id }});
      //   }
      
      return res.redirect('/');
      // products.forEach(element => {
      //   if(element.id == id){
      //     element.name = req.body.name;
      //     element.description = req.body.description;
      //     element.talle = req.body.talle;
      //     element.category = req.body.category;
      //     element.price = req.body.price;
      //   }
      // })

      // fs.writeFileSync(productsFilePath, JSON.stringify(productos));
      // res.redirect('/');
      //res.redirect('/detail/'+id);
    },

    delete: async (req, res) => {
    await db.Product.destroy({
      where: {
        id: req.params.id
      }
    });
    }
}

module.exports = productsController;
