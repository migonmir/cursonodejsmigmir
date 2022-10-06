const models = require('../database/models/index.js')
const errors = require('../const/errors.js')

const bcrypt = require('bcrypy.js')
const signJWT = require('../middlewares/signJWT.js')

module.express = {
    login: async(req,res,next) => { 
                 try {
            const pacient = await models.paciente.findOne({
                where: {
                   mailpaciente: req.params.mailpaciente
                },  
            })
            var contraseniaCoincide = false
            if (user){
                contraseniaCoincide=bcrypt.compareSync(req.body,user.password)
            }
            if (!user || !contraseniaCoincide){
                 return next(errors.CredencialInvalidas)
            }     
            res.json({
                success: true,
                data: {
                    token: signJWT(user),
                    idpaciente: user.idpaciente,
                    nombrepaciente: user.nombrepaciente,
                    apellidopaciente: user.apellidopaciente

                }
            })
        }catch(err){ 
            return next(err)
        }

    },
    registrarse: async(req,res,next) => { 
       try {
            req.body.password= bcrypt.hashSync(req.body.password,10)

           const user = await models.paciente.create(req.body)
          
           res.json({
               success: true,
               data: {
                idpaciente: user.idpaciente
               }
           })
       }catch(err){ 
           return next(err)
       }
    }
   
}