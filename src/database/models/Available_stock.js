module.exports = (sequelize,dataTypes) => {

    let alias = "Available_stock"

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true
        },
        extraSmall:{
            type: dataTypes.INTEGER
        },
        small:{
            type: dataTypes.INTEGER
        },
        medium:{
            type: dataTypes.INTEGER
        },
        large:{
            type: dataTypes.INTEGER
        },
        extraLarge:{
            type: dataTypes.INTEGER
        },
        extraExtraLarge:{
            type: dataTypes.INTEGER}
    }

    let config = {
        tableName: "Available_stock",
        timestamps: false
    }

    const Available_stock = sequelize.define(alias, cols, config)


    // Available_stock.associate = models => {
    //     //relacion con Products
    //     Available_stock.hasMany(models.Product,{
    //         as: 'Products',
    //         foreignKey: 'Available_stock_id'
    //     });
    // }

    return Available_stock
};