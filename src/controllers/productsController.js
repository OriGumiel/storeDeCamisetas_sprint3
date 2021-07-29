const productsController = {
    todos: function(req, res, next) {
        res.render('products/productsAll',{title: 'todos los productos'});
      },

    detalle: function(req, res, next) {
        res.render('respond with a resource');
      },

    nuevo: function(req, res, next) {
        res.render('respond with a resource');
      },

}

module.exports = productsController;