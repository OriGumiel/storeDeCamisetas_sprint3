module.exports = (sequelize,DataTypes) => {

    let alias = "Product";

    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
        },
        description:{
            type: DataTypes.TEXT,
        },
        price:{
            type: DataTypes.INTEGER,
        },
        category:{
            type: DataTypes.STRING,
        },
        // available_stock_id:{
        //     type: DataTypes.INTEGER,
        // },
    };

    let config = {
        tableName: "products",
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config)

    Products.associate = models => {
         //relacion con available_stocks
         Products.belongsToMany(models.available_stock_id,{
            as: 'available_stocks',
            primaryKey: 'id'
        });
        //relacion de product_images
        Products.hasMany(models.Product_images,{
            as: 'Product_image',
            foreignKey:'product_id'
        });
    }

    return Product // NO OLVIDAR NUNCA RETORNAR
}
