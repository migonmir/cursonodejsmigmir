// trabajo final - api con Express

const express = require('express');  // importar express
const globalConstantes = require('./const/globalConstantes.js');
const routerConfig = require('./routes/index.router.js'); // importa las rutas.
const errorHandler = require('./middlewares/error.js')
let createError = require('http-errors')

const configuracionApi = (app) =>{  //confijura la api
	app.use(express.json()) //para poder usar json 
	app.use(express.urlencoded({extended:true})) //permite usar posmant

	return;
};

const configuracionRouter = (app) =>{  //confijura la ruoter
	app.use('/api/', routerConfig.rutas_init())
	app.use('/', routerConfig.rutas_auth())
	app.use(function(req,res,next){
		next(createError(404))
	})
	app.use(errorHandler)
};

const init = () =>{
	const app=express()  //crear un instancia de express
	configuracionApi(app)  //configura la api
	configuracionRouter(app)  //configura las rutas
	//configurar el puerto de escucha

	app.listen(globalConstantes.PORT); // escucha en el puerto 5000
	console.log('Servidor corriendo en el puerto ' + globalConstantes.PORT);
};


init(); //inicia la apliacacion
