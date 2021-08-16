const usersController = {
    login: function(req, res, next) {
        res.render('users/userlogin',{title:'Estas en el login', 
        style: '/stylesheets/styleslogin.css'});
      },
    register: function(req, res, next) {
        res.render('users/userRegister',{title:'Estas en el registro',
        style: '/stylesheets/styleregister.css'});
      },

}

module.exports = usersController;