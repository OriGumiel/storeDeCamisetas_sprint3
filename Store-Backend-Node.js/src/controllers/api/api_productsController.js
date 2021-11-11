const db = require('../../database/models');
const sequelize = db.sequelize;

const api_productsController  = {
    all: (req,res) => {
        db.Product.findAll({
            include:[{association:"product_images"}]
            })
        .then( allProducts => {
            let response = {
                meta : {
                    status: 200,
                    total: allProducts.length,
                    url: 'api/products/all'
                },
                data : allProducts
            }

            return res.json(response)
        })

    },
    one: (req,res) => {
        db.Product.findByPk(req.params.id)
        .then( Product => {
            let response = {
                meta : {
                    status: 200,
                    total: Product.length,
                    url: `api/products/one/${req.params.id}`
                },
                data : Product
            }
        // .catch(error => {
        //     console.log(error)
        // })

            return res.json(response)
        })

    }
}

module.exports = api_productsController;