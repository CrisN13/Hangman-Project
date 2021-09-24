//Importando módulos a utilizar
const express =  require('express')
const { gHint } = require('./GetHint.Controller')

//Creando un nuevo router
const getHint = express.Router()

//Configurando ruta de la API para brindar una pista cuando el usuario lo requiera
getHint.get('/', gHint)

//Exportando ruta
exports.getHint = getHint