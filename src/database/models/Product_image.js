module.exports = (sequelize,DataTypes) => {

    let alias = "Product_images"

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primarykey: true
        },
        image: {
            type: DataTypes.TEXT
        },
        product_id: {
            type: DataTypes.INTEGER
        },
    };

    let config = {
        tableName: "Product_images",
        timestamps: false
    }

    const Product_image = sequelize.define(alias, cols, config)
    
    Product_image.associate = models => {
        //relacion con Products
        Product_image.belongsTo(models.Product,{
            as: 'Products',
            foreignKey = 'product_id'
        });
    }

};