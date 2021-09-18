const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/images/users'));    //Aquí deben indicar donde van a guardar la imagen
    },
    filename: function (req, file, cb) {
      let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
      cb(null, fileName);     
    }
  })
  const upload= multer({ storage: storage });

module.exports = upload;