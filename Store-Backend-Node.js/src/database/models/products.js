module.exports = (sequelize,DataTypes) => {

    let alias = "Product";

    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
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
        available_stock_id:{
            type: DataTypes.INTEGER,
        },
        category:{
            type: DataTypes.STRING,
        },
    };

    let config = {
        tableName: "products",
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config)

    Product.associate = models => {
         //relacion con available_stocks
         Product.hasMany(models.Available_stock,{
            as: 'available_stocks',
            primaryKey: 'id'
        });
        //relacion de product_images
        Product.hasMany(models.Product_images,{
            as: 'product_images',
            foreignKey:'product_id'
        });
    }

    return Product // NO OLVIDAR NUNCA RETORNAR
}
