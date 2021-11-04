module.exports = (sequelize,dataTypes) => {

    let alias = "Product_images"

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true
        },
        image: {
            type: dataTypes.TEXT
        },
        product_id: {
            type: dataTypes.INTEGER
        },
    };

    let config = {
        tableName: "product_images",
        timestamps: false
    }

    const Product_image = sequelize.define(alias, cols, config)
    
    Product_image.associate = models => {
         // relacion con Products
         Product_image.belongsTo(models.Product,{
             as: 'Products',
            foreignKey: 'product_id'
        });
    }

    return Product_image
};