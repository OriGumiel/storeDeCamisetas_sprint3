const fs = require("fs");
const path = require("path");
const bcryptjs = require('bcryptjs');
const { validationResult } = require("express-validator");

const User = require('../models/Users');
const { reduce } = require("../middlewares/validateRegisterMiddleware");


const usersController = {
    login: function(req, res, next) {
        res.render('users/userlogin',{
          title:'Estas en el login',
          style:'/stylesheets/styleslogin.css'
        });
      },

    profile: function(req, res, next) {
        res.render('users/profile',{
          title:'Estas en el perfil',
          style: '/stylesheets/profile.css'
        });
      },

    register: function(req, res, next) {
        res.render('users/userRegister',{
          title:'Estas en el registro',
          style: '/stylesheets/styleregister.css'
        });
      },
    create: (req, res) => {      
        const resultValidation = validationResult(req);
                      
        
        if (resultValidation.errors.length > 0) {
          return res.render('users/userRegister', {
            errors: resultValidation.mapped(), //convierto el array errors en obj.literal
            oldData: req.body
          });        
        }
        
        // Validación propia
        let userInDB = User.findByField('email', req.body.email);
        
        if (userInDB) {
          return res.render('users/userRegister', {
            errors: {
             email: {
                msg: 'Este email ya está registrado'
              }
            },
            oldData: req.body
          });
        }
    
        let userToCreate = {
          ...req.body,
          category: "user",  
          password: bcryptjs.hashSync(req.body.password, 10),
          user_avatar: req.file.filename
        }
    
        let userCreated = User.create(userToCreate);
        
        res.redirect('/users/login');
          
    },           
    
    loginProcess: (req, res) => {
      let userToLogin = User.findByField('email', req.body.email);
      

      if (userToLogin) {
        let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
			if (isOkThePassword) {
        delete userToLogin.password;
        // se crea obj.literal session con prop userLogged y valor userToLogin
        req.session.userLogged = userToLogin;

        if(req.body.remember_user) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 * 24 }) //24 horas
				}
      
        return res.redirect("/users/profile");
      }
      // si contraseña inválida
      return res.render('users/userlogin', {
        errors: {
          email: {
            msg: 'La contraseña es incorrecta'
          }
        }
      })
    }

      return res.render('users/userlogin', {
        errors: {
          email: {
            msg: 'Este usuario no está registrado'
          }
        }
      })
    },

    profile: function(req, res, next) {

      res.render('users/profile',{
        user: req.session.userLogged,
      });
    },

    logout: (req, res) => {
      res.clearCookie('userEmail');
      req.session.destroy();
      res.redirect('/');
    }
}

module.exports = usersController;
