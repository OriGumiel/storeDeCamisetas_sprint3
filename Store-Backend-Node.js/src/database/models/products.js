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

    // Products.associate = models => {
    //     //relacion con available_stocks

    //     //relacion de product_images
    // }

    return Product // NO OLVIDAR NUNCA RETORNAR
}
