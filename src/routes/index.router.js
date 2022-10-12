const{Router} = require("express") // importa express

const medicosRouter = require("./medicos.Router.js")
const pacientesRouter = require("./pacientes.Router.js")
const authRouter = require("./auth.Router.js")
const decodeJWT = require("../middlewares/decodeJWT.js")

const rutas_init = () =>{
   const router = Router()

   
   router.use("/pacientes", decodeJWT, pacientesRouter) 
   router.use("/medicos", decodeJWT,medicosRouter)
   return router
};
const rutas_auth = () =>{
   const router = Router()

   router.use("/auth", authRouter) 
  
   return router
};

module.exports = {rutas_init, rutas_auth}