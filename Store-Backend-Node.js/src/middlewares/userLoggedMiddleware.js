const db = require('../database/models');

async function userLoggedMiddleware(req, res, next) {
  
  res.locals.isLogged = false;

  if (req.cookies.userEmail) {
    let userFromCookie = await db.User.findOne({
        where: {
            email: req.cookies.userEmail
        }
    });
    if (userFromCookie) {
        req.session.userLogged = userFromCookie; 
    }
    if (req.session && req.session.userLogged){
        res.locals.isLogged = true;
    }    
}

next();
};

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