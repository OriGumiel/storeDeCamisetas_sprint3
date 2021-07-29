const usersController = {
    login: function(req, res, next) {
        res.render('users/userlogin',{title:'Estas en el login'});
      },
    register: function(req, res, next) {
        res.render('users/userRegister',{title:'Estas en el registro'});
      },

}

module.exports = usersController;