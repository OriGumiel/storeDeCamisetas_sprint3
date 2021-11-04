const db = require('../database/models');
const Op = db.Sequelize.Op;

async function userLoggedMiddleware(req, res, next) {
  
  res.locals.isLogged = false;

  let emailInCookie = req.cookies.userEmail; //guardo en variable lo que hay en la cookie userEmail
  // lo busco en la DB

  if (emailInCookie) {
    db.User.findOne({
        where: {
        email: emailInCookie,
      },
    })
      .then((userFound) => {
        req.session.userLogged = userFound;
      })
      .catch((e) => res.send(e));
  }

  // // si hay cookies de email y encuentro en DB
  // if (userFromCookie) {
  //   // lo guardo en session
  //   req.session.userLogged = userFromCookie;
  // }

  // si hay alguien logueado(controlador), o hay cookies y se guardó la session..
  if (req.session.userLogged) {
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged; //paso lo que tengo en session a una variable local
  }

  next();
}
// pasamos a un middleware de aplicacion para saber si esta en true o false, y asi mostrar distintas cosas
module.exports = userLoggedMiddleware;

// const User = require("../database/models");

// function userLoggedMiddleware(req, res, next) {
// 	res.locals.isLogged = false;

// 	if (req.session.userLogged) {
// 		res.locals.isLogged = true;
// 		res.locals.userLogged = req.session.userLogged;
// 	}

// 	next();
// }

// module.exports = userLoggedMiddleware;