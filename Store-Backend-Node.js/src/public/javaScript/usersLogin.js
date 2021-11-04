window.addEventListener('load', function() {

    console.log("estamos bien")

    let form = document.querySelector('.form')
  
    form.addEventListener('submit', function(event){
  
      // * Capturo todos los elementos del formulario * //
      let email = document.querySelector('#email')
      let password = document.querySelector('#password')
  
      let errors = []
    
      // * validaciones para el email * //
       if(email.value == ""){
        errors.push("El campo email no puede estar vacio")
      }
  
      function ValidateEmail(email) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          if(email.value.match(mailformat)){
            console.log("El campo email esta ok");
            } else {
              errors.push("El campo email tiene que tener formato de email");
          }
        }
        
  
      // * validaciones para la contraseña * //
       if(password.value == ""){
        errors.push("El campo contraseña no puede estar vacio")
      } else if (last_name.value.length < 8 ) {
        errors.push("El campo contraseña tiene que tener al menos 8 caracteres")
      }
  
      
      if(errors.length > 0){
        event.preventDefault()
      }
      
      console.log(errors)
  
    })
    
    });