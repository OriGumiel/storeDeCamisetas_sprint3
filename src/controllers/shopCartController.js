const fs = require('fs');
const path = require('path');

const shopCartController = {

    cart: function(req, res, next) {
        res.render('shopCart/cart', {title:'Estas en el carrito de productos'});
      },
    
    addProduct: function (req, res, next){
        
    }
}

module.exports = shopCartController;
