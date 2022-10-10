const models = require('../database/models/index.js')
const errors = require('../const/errors.js')

module.exports = {
    listar: async(req,res) => {
     //lista todos los medicos
     try {
       const medic = await models.medico.findAll()
       res.json({
       success: true,
        data: {
           medicos: medic
        }
    })
}catch(err){ 
    return next(err)
}
    },
    crear: async (req,res) => {
         //crea un nuevo medico
        //pasandole informacion por el body
        try {
            const medic = await models.medico.crearte(req.body)
            res.json({
                success: true,
                data: {
                    id: medic.idmedico
                }
            })
        }catch(err){ 
            return next(err)
        }

    },
    listarInfo: async(req,res, next) => { 
        //muestra la informacion de un solo medico
        //reciba por parametro el idmedico
        try {
            const medic = await models.medico.findOne({
                where: {
                    idmedico: req.params.idmedico
                },
              //  Include: [{
              //     model: models.medico
              //  }]
            })
            if (!medic) return next(errors.MedicoInexistente)
            res.json({
                success: true,
                data: {
                    medico: medic
                }
            })
        }catch(err){ 
            return next(err)
        }
    },
    prueba: async(req,res) => {
        try {
            console.log('entro en medico ')
            res.json({
                message: "hola mundo"
            })
        }catch(err){ 
            console.log(err)
        }
    },

    

}