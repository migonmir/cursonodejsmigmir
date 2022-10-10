require('dotenv').config() //importo dotenv para tener la vble de entorno
module.exports = {
    PORT: process.env.PORT || 5000,  //use el puerto del env
    DB_NAME: process.env.DB_NAME,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,

    JWT_SECRET: process.env.JWT_SECRETO,
}