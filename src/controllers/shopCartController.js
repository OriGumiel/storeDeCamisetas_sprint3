const fs = require('fs');
const path = require('path');

const shopCartController = {

    cart: function(req, res, next) {
        res.render('shopCart/cart', {title:'Estas en el carrito de productos'});
      },

    productToAdd: function(req, res, next) {
        res.render('shopCart/productToAdd');
      },
    
    addProduct: function (req, res, next){
        console.log(req.body);
        res.redirect('/products/detalle/:id');
        // res.render('shopCart/productToAdd', {productToAdd:productToAdd});
    }
}

module.exports = shopCartController;
