const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/Productos.json"); //ruta a nuestra DB JSON
let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8")); // pasamos de formato JSON a JS

const mainController = {    
    home: function(req, res, next) {
        res.render('main',{
            title: 'Express',
            style: '/stylesheets/styles-index.css',
    })
}
}

module.exports = mainController;

