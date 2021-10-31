module.exports = (sequelize, dataTypes) => {

    let alias = "User";
    
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.TEXT
        },
        last_name: {
            type: dataTypes.TEXT
        },
        email: {
            type: dataTypes.TEXT
        },
        password: {
            type: dataTypes.TEXT
        },
        user_avatar: {
            type: dataTypes.TEXT            
        },        
        user_type: {
            type: dataTypes.TEXT
        },
        
    };

    let config = {
        tableName: "users",
        timestamps: false
    };

    const User = sequelize.define(alias, cols, config);

    return User
}