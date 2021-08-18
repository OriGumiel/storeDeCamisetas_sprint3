const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productsController = {
    todos: function(req, res, next) {

      let equipo = products.filter(element => element.category === "Europa");
      
        res.render('products/productsAll',{
          title: 'todos los productos',
          style: '/stylesheets/productsAll.css',
          equipo: equipo
        });
      },

    detalle: function(req, res, next) {
        res.render('products/productsDetail',{title: 'Estas accediendo al detalle de un producto',
        style: '/stylesheets/styles.css',
      });
      },

    nuevo: function(req, res, next) {
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


    cart: function(req, res, next) {
       
        res.render('products/productsCart',{
          title: 'Estas en el carrito de productos',
          style: '/stylesheets/productsCart.css'
      });
      },

}

module.exports = productsController;