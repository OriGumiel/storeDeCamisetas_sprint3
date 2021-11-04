const db = require('../../database/models');
const sequelize = db.sequelize;

const api_usersController  = {
    all: (req,res) => {
        db.User.findAll()
        .then( allUsers => {
            let response = {
                meta : {
                    status: 200,
                    total: allUsers.length,
                    url: 'api/users/all'
                },
                data : allUsers
            }

            return res.json(response)
        })

    },
    one: (req,res) => {
        db.User.findByPk(req.params.id)
        .then( User => {
            let response = {
                meta : {
                    status: 200,
                    total: User.length,
                    url: `api/users/one/${req.params.id}`
                },
                data : User
            }
        // .catch(error => {
        //     console.log(error)
        // })

            return res.json(response)
        })

    }
}

module.exports = api_usersController;