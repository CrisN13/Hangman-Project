//Importando módulos a utilizar
const express =  require('express')
const { startGame } = require('./NewGame.Controller')

//Creando un nuevo router
const newGame = express.Router()

//Configurando ruta de la API para iniciar el juego
newGame.post('/', startGame)

//Exportando ruta
exports.newGame = newGame