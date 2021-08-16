const mainController = {
    home: function(req, res, next) {
        res.render('main',{
            title: 'Express',
            style: '/stylesheets/styles-index.css',
    })
}
}

module.exports = mainController;

