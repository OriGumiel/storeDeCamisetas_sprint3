const usersController = {
    login: function(req, res, next) {

        res.render('users/userlogin',{
          title:'Estas en el login',
          style:'/stylesheets/styleslogin.css'
        });
      },
    register: function(req, res, next) {
        res.render('users/userRegister',{
          title:'Estas en el registro',
          style: '/stylesheets/styleregister.css'
        });

      },
      create: (req, res) => {
          let user = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password, //bcrypt.hashSync(req.body.password, 10),
            user_avatar:  req.file ? req.file.filename : '',
            // role: 1
          }
          let archivoUsers = fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json'), {
            encoding: 'utf-8'
          });
          let users;
          if (archivoUsers == "") {
            users = [];
          } else {
            users = JSON.parse(archivoUsers);
          };
    
          users.push(user);
          usersJSON = JSON.stringify(users, null, 2);
          fs.writeFileSync(path.resolve(__dirname, '../data/usuarios.json'), usersJSON);
          res.redirect('/userlogin.ejs');
          
        }
}

module.exports = usersController;