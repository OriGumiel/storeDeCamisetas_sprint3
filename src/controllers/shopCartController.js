const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize

const shopCartController = {

    getCart: function(req, res, next) {
        res.render('shopCart/cart', {title:'Estas en el carrito de productos'});
      },

    productToAdd: function(req, res, next) {
        res.render('shopCart/productToAdd');
      },
    
    createCart: function (req, res, next){
        console.log(req.body);
        db.Shop_carts.create({
          price: req.body.price,
          quantity: req.body.quantity
        })
        .then(()=> {
          res.redirect('/products/detalle/:id');
        })
    },
}

module.exports = shopCartController;
