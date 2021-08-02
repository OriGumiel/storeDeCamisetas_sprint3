const mainController = {
    home: function(req, res, next) {
        res.render('main', {title: 'Express' });
    },
}

module.exports = mainController;