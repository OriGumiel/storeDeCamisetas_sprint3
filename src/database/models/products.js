module.exports = (sequelize,DataTypes) => {

    let alias = "Product";

    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primarykey: true
        },
        name:{
            type: DataTypes.VARCHAR,
        },
        description:{
            type: DataTypes.TEXT,
        },
        price:{
            type: DataTypes.INTEGER,
        },
        category:{
            type: DataTypes.VARCHAR,
        },
        available_stock_id:{
            type: DataTypes.INTEGER,
        },
    };

    let config = {
        tableName: "products",
        timestamps: false
    }

    const Products = sequelize.define(alias, cols, config)

    products.associate = models => {
        //relacion con available_stocks

        //relacion de product_images
    }

    return Products // NO OLVIDAR NUNCA RETORNAR
}
