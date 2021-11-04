const fs = require('fs');
const path = require('path');
const db = require('../database/models');

module.exports = (req,res,next) => {
    //Variables superlocals
    res.locals.usuario = false;
    if (req.session.user) {
        res.locals.user = req.session.user;
        return next();
    } else if (req.cookies.email) {
        let user = db.User.find(user = user.email == req.cookies.email)
        req.session.user = user
        res.locals.usuario = usuario;
        return next();
    }else{
        return next();
    }

}