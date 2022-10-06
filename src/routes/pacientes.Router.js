const router = require("express").Router();

const  pacienteController = require('../controllers/paciente.controller.js')
const  validate = require('../middlewares/validate.js')
const  pacienteSchema = require('../middlewares/schemes/paciente.scheme.js')

router.get('/', pacienteController.listar)
router.post('/',validate(pacienteSchema.crearpaciente),pacienteController.crear)
router.get('/:idpaciente', pacienteController.listarInfo)

module.exports = router;