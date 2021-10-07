module.exports = (sequelize,dataTypes) => {

    let alias = "Shop_carts"
    
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        price: {
            type: dataTypes.INTEGER
        },
        user_id: {
            type: dataTypes.INTEGER
        },
        created_at: {
            type: dataTypes.DATE
        },
        buy_date: {
            type: dataTypes.DATE
        },
        quantity: {
            type: dataTypes.INTEGER
        }
    };
    
    let config = {
        tableName: "Shop_carts",
        timestamps: false
    }

    const Shop_cart = sequelize.define(alias, cols, config)

    // Shop_cart.associate = models => {
    //     //relacion con Users.
    //     Shop_cart.belongsTo( models.Users,{
    //         as: "Users",
    //         foreignKey: "user_id"
    //     });
    //     //relacion con Products a travez de Product_Shop_cart
    //     Shop_cart.belongsToMany(models.Products,{
    //         as:"Products",
    //         through: "Product_Shop_cart",
    //         foreignKey: "shop_cart_id",
    //         otherKey: "product_id",
    //         timestamps: false
    //     });
    // }
    
    return Shop_cart
}
