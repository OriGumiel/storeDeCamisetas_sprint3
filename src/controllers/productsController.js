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
        res.render('products/productsNew',{title: 'Creaste un nuevo producto'});
      },

    cart: function(req, res, next) {
       
        res.render('products/productsCart',{
          title: 'Estas en el carrito de productos',
          style: '/stylesheets/productsCart.css'
      });
      },

}

module.exports = productsController;