const path = require('path');
const { body } = require('express-validator');
const db = require('../database/models');

module.exports = [
    body('first_name')
      .notEmpty()
      .withMessage('Debe llenar el nombre')
      .bail()
      .isLength({ min: 2})
      .withMessage("El nombre tiene que tener mínimo 2 caracteres"),
    body('last_name')
      .notEmpty()
      .withMessage('Debe llenar el apellido')
      .bail()
      .isLength({ min: 2})
      .withMessage("El apellido tiene que tener mínimo 2 caracteres"),
    body('email')
      .notEmpty()
      .withMessage('Debe llenar el email')
      .bail()
      .isEmail()
      .withMessage('Debe escribir un formato de email')
      .bail()
      .custom(async (value, {req})=>{
        let usuarioExistente = await db.User.findOne({
          where: {
            email: req.body.email
            }
        });
        if (usuarioExistente) {
          throw new Error ('Este email ya esta registrado')
          }
          return true;
          }),
    body('password')
      .notEmpty()
      .withMessage('Debe llenar la password')
      .bail()
      .isLength({ min: 8})
    .withMessage(
      "La contraseña debe tener al menos 8 dígitos, incluir una mayúscula, una minúscula, y un número"
    )
    .matches("[0-9]")
    .withMessage(
      "La contraseña debe tener al menos 8 dígitos, incluir una mayúscula, una minúscula, y un número"
    )
    .matches("[A-Z]")
    .withMessage(
      "La contraseña debe tener al menos 8 dígitos, incluir una mayúscula, una minúscula, y un número"
    ),
    body('user_avatar').custom((value, { req }) => {
      let file = req.file;
      let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];
  
      if (!file) {
        throw new Error('Tienes que subir una imagen');
      }else{
        let fileExtension = path.extname(file.originalname);
        if (!acceptedExtensions.includes(fileExtension)) {
            
            throw new Error (`Las extensiones permitidas son ${acceptedExtensions.join(', ')}`);
        }
    } 
  
      return true;
    })
  ]