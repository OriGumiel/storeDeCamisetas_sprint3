module.exports = (sequelize,DataTypes) => {

    let alias = "Available_stock"

    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primarykey: true
        },
        extraSmall:{
            type: DataTypes.INTEGER
        },
        small:{
            type: DataTypes.INTEGER
        },
        medium:{
            type: DataTypes.INTEGER
        },
        large:{
            type: DataTypes.INTEGER
        },
        extraLarge:{
            type: DataTypes.INTEGER
        },
        extraExtraLarge:{
            type: DataTypes.INTEGER}
    }

    let config = {
        tableName: "Available_stock",
        timestamps: false
    }

    const Available_stock = sequelize.define(alias, cols, config)


    Available_stock.associate = models => {
        //relacion con Products
        Available_stock.hasMany(models.Product,{
            as: 'Products',
            foreignKey: 'Available_stock_id'
        });
    }

};