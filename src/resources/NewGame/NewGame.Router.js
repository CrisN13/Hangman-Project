//Importando módulos a utilizar
const express =  require('express')
const { StartGameController } = require('./NewGame.Controller')

//Creando un nuevo router
const newGameRouter = express.Router()

//Configurando ruta de la API para iniciar el juego
newGameRouter.post('/', StartGameController)

//Exportando ruta
exports.newGameRouter = newGameRouter