//Importando módulos a utilizar
const express =  require('express')
const { GetHintController } = require('./GetHint.Controller')

//Creando un nuevo router
const getHintRouter = express.Router()

//Configurando ruta de la API para brindar una pista cuando el usuario lo requiera
getHintRouter.get('/', GetHintController)

//Exportando ruta
exports.getHintRouter = getHintRouter