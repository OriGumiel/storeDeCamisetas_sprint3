const fs = require('fs');
const path = require('path');
const db = require('../database/models')
const sequelize = db.sequelize 

const productsFilePath = path.join(__dirname, '../data/Productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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

    detalle: function(req, res, next) {
        res.render('products/productsDetail',{title: 'Estas accediendo al detalle de un producto',
        style: '/stylesheets/styles.css',
      });
      },

    getForm: function(req, res, next) {
        res.render('products/productsNew',{title: 'Creaste un nuevo producto',
        style: '/stylesheets/productsNew.css',
      });
      },


    
    store: (req, res) => {
        
        let nuevoId = products[products.length - 1].id + 1;
        
        let nuevoProducto = {
            id: nuevoId,
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            talle: req.body.talle,
            color: req.body.color,
            esNovedad: req.body.esNovedad,
            description: req.body.description,            
            image: req.file.originalname,
        }

        products.push(nuevoProducto);
        fs.writeFileSync(productsFilePath, JSON.stringify(products));
        res.redirect('/products/nuevoProducto')
    },

    create: async (req,res) => {
      let newProduct = await db.Product.create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category
      })

      res.send(req.body)

      .catch((error) => {
        console.log(error)
      })

      res.render('products/productCreate',{title: `Creaste un nuevo producto llamado ${newProduct.name}`});
    },

    // Update - Form to edit
    edit: (req, res) => {
      let id = req.params.id;
      let productToEdit =  products.find(element => element.id == id);
      res.render('products/product-edit-form', {productToEdit: productToEdit,
      style: '/stylesheets/productsNew.css'});
    },
    
    // Update - Method to update
    update: (req, res) => {
      let id = req.params.id;
      products.forEach(element => {
        if(element.id == id){
          element.name = req.body.name;
          element.description = req.body.description;
          element.talle = req.body.talle;
          element.category = req.body.category;
          element.price = req.body.price;
        }
      })

      fs.writeFileSync(productsFilePath, JSON.stringify(productos));
      res.redirect('/');
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
