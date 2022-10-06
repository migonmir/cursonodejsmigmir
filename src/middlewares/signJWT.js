const  jwt  =  require ( 'jsonwebtoken' )  // para crear el token
const  globalConstants  =  require ( '../const/globalConstants' )

módulo.export  =  function  ( usuario )  {  // recibe el usuario por parámetro

    if ( usuario )  {

        // Se crea el token con los datos del usuario
         const token =  jwt.sign ( {
            idpaciente : usuario.idpaciente
        } ,
            globalConstants.JWT_SECRET,  // clave secreta para encriptar el token
            {
                expireIn: '3000m'  // expira en 3 horas
            }
        )
        return  token  // devuelvo el token
    } else  {
        return  null  // si no hay usuario, devuelvo null
    }


}
