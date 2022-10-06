const router = require("express").Router();

const  medicoController = require('../controllers/medico.Controller')
const  validate = require('../middlewares/validate.js')
const  medicoSchema = require('../middlewares/schemes/medico.scheme.js')


router.get('/', medicoController.listar)
router.post('/',validate(medicoSchema.crearmedico),medicoController.crear)
router.get('/:idmedico', medicoController.listarInfo)
module.exports = router;