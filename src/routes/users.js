var express = require('express');
var router = express.Router();
const usersController = require ('../controllers/usersController')

//Requiero Multer, ya que voy a permitir que el usuario que se registre suba su avatar
const multer = require('multer');

//Aquí dispongo la información del storage para tratamiento de guardado imagenes
//https://www.npmjs.com/package/multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../public/images/users'));    //Aquí deben indicar donde van a guardar la imagen
    },
    filename: function (req, file, cb) {
      cb(null, 'foto' + '-' + Date.now()+ path.extname(file.originalname));      
    }
  })
  const upload= multer({ storage })


/* GET users listing. */
router.get('/login', usersController.login );

router.get('/register', usersController.register );
// router.post('/register',upload.single('user-avatar'), usersController.create );
router.post('/register', usersController.create );


module.exports = router;