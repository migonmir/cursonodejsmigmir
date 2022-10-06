const  jwt  =  require ( 'jsonwebtoken' )
const  errors  =  require ( '../const/errors.js' )
const models =  require ( '../database/models/index.js' )
const  moment  =  require ('moment')
const  globalConstantes  =  require ( '../const/globalConstantes' )

módulo.exports  = async function ( req , res , next ) {    

    if  (req.header('Authorization') && req.header('Authorization').split (' ').lenght > 1)  {
        try  {

            // Verifico el token y lo decodificado con la clave secreta para obtener los datos del usuario que lo creó y los guardo en la variable data
            let  dataToken  =  jwt.verify( req.header('Authorization').split(' ')[1], globalConstantes.JWT_SECRET)

            if  ( dataToken.exp<= moment().unix())
                return  next(errors.SesionExpirada)  // Si el token expiró, devuelvo error

            res.locals.token  =  dataToken 

            const  usuario  =  await models.paciente.findOne({
                where : {
                    id : dataToken.idpaciente
                }
            } )
            if  ( !usuario)  return next(errors.UsuarioNoAutorizado)  

            res.locals.usuario  =  usuario  //me puedo guardar el usuario en el locals para usar en las rutas que necesitan el usuario

            next ( )  // Si todo está bien, paso al siguiente middleware o controlador

        }  catch (err)  {
            return next(errors.SesionExpirada)
        }

    }  else {
        return next(errors.UsuarioNoAutorizado)
    }
}
