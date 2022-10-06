'use strict';

const models = require("../models/index");
const bcrypt = require('bcrypy.js')

module.exports = {
  up: function (queryInterface, Sequelize) {
      return Promise.all([
      models.medico.findOrCreate({
        where:{
          idmedico: "1" 
        },
        defaults:{
         apellidomedico: "Lopez",
         nombremedico: "Juan Manuel",
         dnimedico: "24356782",
         especialidadmedico: "Pediatra", 
         mailmedico: "lopezjm@gmail.com.ar"
        }
      }),
      models.medico.findOrCreate({
          where:{
            idmedico: "2" 
          },
          defaults:{
           apellidomedico: "Gomez",
           nombremedico: "Maria Laura",
           dnimedico: "24489382",
           especialidadmedico: "Dermatologa", 
           mailmedico: "gomezml@gmail.com.ar"
          }  
        }),
        models.medico.findOrCreate({
            where:{
              idmedico: "3" 
            },
            defaults:{
             apellidomedico: "Diez",
             nombremedico: "Juan Cruz",
             dnimedico: "35350012",
             especialidadmedico: "Traumatologo", 
             mailmedico: "diezjc@gmail.com.ar"
            }
        }),
         models.paciente.findOrCreate({
           where:{
             idpaciente: "1" 
             },
           defaults:{
              apellidopaciente: "Alvarez",
              nombrepaciente: "Mariela",
              dnipaciente: "14321678",
              obrasocialpaciente: "IOMA", 
              mailpaciente: "alvarezM@gmail.com.ar",
              password: bcrypt.hashSync("0000056789",10)
             }
       }),
         models.paciente.findOrCreate({
            where:{
               idpaciente: "2" 
            },
             defaults:{
              apellidopaciente: "Perez",
              nombrepaciente: "Daniel",
              dnipaciente: "145899328",
              obrasocialpaciente: "IOMA", 
              mailpaciente: "perezD@gmail.com.ar",
              password: bcrypt.hashSync("0000012345",10)
            }
        }),

     ])
  },
};
