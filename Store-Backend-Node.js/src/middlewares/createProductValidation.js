const path = require("path");
const { body } = require("express-validator");


const validations = [
  body("name")
    .notEmpty()
    .withMessage("Tienes que escribir un nombre")
    .bail()
    .isLength({ min: 5 })
    .withMessage("Tiene que tener al menos 5 caracteres"),
  body("description")
    .notEmpty()
    .withMessage("Tienes que escribir una descripción para el producto")
    .bail()
    .isLength({ min: 20 })
    .withMessage("Tiene que tener al menos 20 caracteres"),
  body("price")
    .notEmpty()
    .withMessage("Tienes que marcar un precio")
    .bail()
    .isNumeric()
    .withMessage("Tienes que escribir un valor numérico"),  
  body("category")
    .notEmpty()
    .withMessage("Tienes que seleccionar una categoría"),
  body("image").custom((value, { req }) => {
    let file = req.files;
    let acceptedExtensions = [".jpg", ".jpeg", ".png", ".gif"];

    if (file.length < 1) {
      throw new Error("Tienes que subir al menos una imagen");
    } else {
      for (const onefile of file) {
        let fileExtension = path.extname(onefile.originalname);
        if (!acceptedExtensions.includes(fileExtension)) {
          throw new Error(
            `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
              ", "
            )}`
          );
        }
      }
    }
    return true;
  }),
];

module.exports = validations;
