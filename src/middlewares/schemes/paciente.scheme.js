const Joi = require('joi')

let crearpaciente = Joi.object({
    apellidopaciente: Joi.string().required(),
    nombrepaciente: Joi.string().required(), 
    dnipaciente: Joi.string().required(),
    obrasocialpaciente: Joi.string().required(), 
    mailpaciente: Joi.string().optional(), 
    password: Joi.string().required(), 
})
module.exports = {
    crearpaciente
}
