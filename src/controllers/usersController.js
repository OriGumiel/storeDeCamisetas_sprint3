const db = require('../database/models');
const sequelize = db.sequelize;

const fs = require("fs");
const path = require("path");
const bcryptjs = require('bcryptjs');
const { validationResult } = require("express-validator");

// const User = require('../models/Users');
const { reduce } = require("../middlewares/validateRegisterMiddleware");

//Otra forma de llamar a los modelos
//const Users = db.User;


const usersController = {
  all: function () {
    db.User.findAll({
      include: [{ association: "roles" }, { association: "orders" }],
    }).then(function (users) {
      return users;
    });
  },

  findByfield: function (field, value) {
    let users = this.all();
    let userFound = users.find((user) => user[field] === value);
    return userFound;
  },

  findBypk: function (id) {
    return this.findByfield("id", id);
  },

  login: function(req, res, next) {
        res.render('users/usersLogin',{
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
        
        
        db.User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 10),
            //user_avatar: req.file.filename,
          })      
           
        
        .then (() => 
          {res.redirect('/users/login')});
          
    },
    
  loginProcess:  (req, res) => {
      let userToLogin = db.User.findOne({
        where: {
          email: req.body.email,
          
        },
      
      })
      .then((userToLogin) => {
          if (userToLogin) {
          let passwordOk = bcryptjs.compareSync(
            req.body.password,
            userToLogin.password
          );
  
            if (passwordOk) {
              delete userToLogin.password;
              req.session.userLogged = userToLogin;
  
              res.cookie("userEmail", req.body.email, { maxAge: 1000 * 60 * 60 });
  
              return res.redirect("../users/profile");
            }else{
              return res.render("users/login", {
                errors: {
                  email: {
                    msg: "Contraseña o usuario incorrecto",
                  },
                  password: {
                    msg: "Contraseña o usuario incorrecto",
                  },
                },
              });
            }
  
        };
  
        return res.render("user/login", {
          errors: {
            email: {
              msg: "Usuario no registrado",
            },
          },
        });
      })
        .catch((e) => {
            console.log(e);
          })
    }, 
    


  profile: function (req, res, next) {

    res.render('users/profile', {
      user: req.session.userLogged,
    });
  },

    logout: (req, res) => {
      res.clearCookie('userEmail');
      req.session.destroy();
      res.redirect('/');
    },

  edit: function (req, res) {
      let id = req.params.id;
      db.User.findByPk(id)      
        .then((user) => {
          return res.render("users/edit", { userToEdit : user});
        })
        .catch((e) => {
          console.log(e);
        });
    },

    
  update: (req, res) => {
      const resultadoValidaciones = validationResult(req);
      if (resultadoValidaciones.errors.length > 0) {
        return res.render("users/edit", {
          errors: resultadoValidaciones.mapped(),
          oldData: req.body,
        });
      }
  
      let userEdit = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        //password: req.body.password,        
        //user_avatar: req.file.filename,
        password: bcryptjs.hashSync(req.body.password, 10),        
        //user_avatar: req.file.filename,
      };
      
      db.User.update(userEdit, { where: { id: req.params.id } })
        .then(() => res.redirect("/"))
        .catch((e) => {
          console.log(e);
        });
    },


}

module.exports = usersController;
