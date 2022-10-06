const models = require('../database/models/index.js')
const errors = require('../const/errors.js')

module.express = {
    listar: async(req,res) => {
          //lista todos los pacientes
        try {
            const pacient = await models.paciente.findAll()
            res.json({
                success: true,
                data: {
                   pacientes: pacient
                }
            })
        }catch(err){ 
            return next(err)
        }
    },

    crear: async (req,res) => {
        //crea un nuevo paciente
        //pasandole informacion por el body
        try {
            const pacient = await models.paciente.crearte(req.body)
            res.json({
                success: true,
                data: {
                    id: pacient.idpaciente
                }
            })
        }catch(err){ 
            return next(err)
        }
    },
    listarInfo: async(req,res,next) => { 
         //muestra la informacion de un solo paciente
        //reciba por parametro el idpaciente
        try {
            const pacient = await models.paciente.findOne({
                where: {
                    idpaciente: req.params.idpaciente
                },
                Include: [{
                    model: models.medico
                }]
            })
            if (!pacient) return next(errors.PacienteInexistente)
            res.json({
                success: true,
                data: {
                    paciente: pacient
                }
            })
        }catch(err){ 
            return next(err)
        }

    },
    prueba: async(req,res) => {
        try {
            console.log('entro en paciente')
        }catch(err){ 
            console.log(err)
        }
    },

    

}