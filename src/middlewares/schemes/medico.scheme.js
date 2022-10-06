const Joi = require('joi')

let crearmedico = Joi.object({
    apellidomedico: Joi.string().required(),
    nombremedico: Joi.string().required(), 
    dnipmedico: Joi.string().required(),
    especialidadmedico: Joi.string().required(), 
    mailmedico: Joi.string().optional()
   
})
module.exports = {
    crearmedico
}
