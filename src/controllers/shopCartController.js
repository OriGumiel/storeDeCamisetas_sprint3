const fs = require('fs');
const path = require('path');

const shopCartController = {

    cart: function(req, res, next) {
        res.render('shopCart/cart', {title:'Estas en el carrito de productos'});
      }
}

module.exports = shopCartController;
