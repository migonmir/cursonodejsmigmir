const router = require("express").Router();

const  authController = require('../controllers/auth.Controller')
const  validate = require('../middlewares/validate.js')
const  pacienteSchema = require('../middlewares/schemes/auth.scheme.js')
//const  medicoSchema = require('../middlewares/schemes/auth.scheme.js')

router.post('/registrarse', authController.registrarse)
router.post('/login',validate(authSchema.authController),authController.login)

module.exports = router;