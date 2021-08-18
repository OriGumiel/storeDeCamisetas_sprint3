const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const productsController = {
    todos: function(req, res, next) {
        res.render('products/productsAll',{title: 'todos los productos'});
      },

    detalle: function(req, res, next) {
        res.render('products/productsDetail',{title: 'Estas accediendo al detalle de un producto',
        style: '/stylesheets/styles.css',
      });
      },

    nuevo: function(req, res, next) {
        res.render('products/productsNew',{title: 'Creaste un nuevo producto',
        style: '/stylesheets/styles.css',
      });
      },

    store: (req, res) => {
        
        let nuevoId = products[products.length - 1].id + 1;
        
        let nuevoProducto = {
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            discount: req.body.discount,
            id: nuevoId,
            image: req.file.originalname,
        }

        products.push(nuevoProducto);
        fs.writeFileSync(productsFilePath, JSON.stringify(products));
        res.redirect('/')
    },

     cart: function(req, res, next) {
       
        res.render('products/productsCart',{
          title: 'Estas en el carrito de productos',
          style: '/stylesheets/productsCart.css',
         });
      },

}

module.exports = productsController;