const productsController = {
    todos: function(req, res, next) {
        res.render('products/productsAll',{title: 'todos los productos'});
      },

    detalle: function(req, res, next) {
        res.render('products/productsDetail',{title: 'Estas accediendo al detalle de un producto'});
      },

    nuevo: function(req, res, next) {
        res.render('products/productsNew',{title: 'Creaste un nuevo producto'});
      },

}

module.exports = productsController;