const db = require('../database/models');
const sequelize = db.sequelize;


//Otra forma de llamar a los modelos
//const Users = db.User;




const usersController = {
  login: function (req, res, next) {
    res.render('users/userlogin', {
      title: 'Estas en el login',
      style: '/stylesheets/styleslogin.css'
    });
  },

  profile: function (req, res, next) {
    res.render('users/profile', {
      title: 'Estas en el perfil',
      style: '/stylesheets/profile.css'
    });
  },

  register: function (req, res, next) {
    res.render('users/userRegister', {
      title: 'Estas en el registro',
      style: '/stylesheets/styleregister.css'
    });
  },

  create: function (req, res) {
    //console.log(db.User, 'Registro')
    db.User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password
      // user_avatar: req.file.filename
    })
      .then(() => {
        res.redirect('/')})
    },

  profile: function (req, res, next) {

    res.render('users/profile');
  },

  logout: (req, res) => {

    res.redirect('/');
  }
}

module.exports = usersController;
