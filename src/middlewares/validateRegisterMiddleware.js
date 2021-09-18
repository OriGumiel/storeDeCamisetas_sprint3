const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('first_name').notEmpty().withMessage('Debe llenar el nombre'),
    body('last_name').notEmpty().withMessage('Debe llenar el apellido'),
    body('email')
      .notEmpty().withMessage('Debe llenar el email').bail()
      .isEmail().withMessage('Debe escribir un formato de email'),
    body('password').notEmpty().withMessage('Debe llenar la password'),
    body('user_avatar').custom((value, { req }) => {
      let file = req.file;
      let acceptedExtensions = ['.jpg', '.png', '.gif'];
  
      if (!file) {
        throw new Error('Tienes que subir una imagen');
      } 
  
      return true;
    })
  ]