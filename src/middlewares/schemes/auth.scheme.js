const Joi = require('joi')

let login = Joi.object({
    mailpaciente: Joi.string().optional(), 
    password: Joi.string().required(), 
})
module.exports = {
    login

}