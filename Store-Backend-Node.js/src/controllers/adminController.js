const db = require('../database/models');
const sequelize = db.sequelize;

const fs = require("fs");
const path = require("path");
const bcryptjs = require('bcryptjs');
const { validationResult } = require("express-validator");

// const User = require('../models/Users');
const { reduce } = require("../middlewares/validateRegisterMiddleware");

const adminController = {    
    admin: function(req, res, next) {
        res.render('admin/admin',{
            title: 'Administracion',
            style: '/stylesheets/styles-index.css',
    })
}
}

module.exports = adminController;