module.exports = (sequelize,DataTypes) => {

    let alias = "Shop_carts"
    
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primarykey: true
        },
        price: {
            type: DataTypes.INTEGER,
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
        created_at: {
            type: DataTypes.DATE
        },
        buy_date: {
            type: DataTypes.DATE
        },
    };
    
    let config = {
        tableName: "Shop_carts",
        timestamps: false
    }

    const Shop_cart = sequelize.define(alias, cols, config)

    Shop_cart.associate = models => {
        //relacion con Users.
        Shop_cart.belongsTo( models.Users,{
            as = "Users",
            foreignKey = "user_id"
        });
        //relacion con Products a travez de Product_Shop_cart
        Shop_cart.belongsToMany(models.Products,{
            as:"Products",
            through: "Product_Shop_cart",
            foreignKey: "shop_cart_id",
            otherKey: "product_id",
            timestamps: false
        });
    }
    
    return Shop_cart
}
