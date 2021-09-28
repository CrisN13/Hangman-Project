//Importando módulos a utilizar
const express =  require('express')
const { GuessWordSolutionController } = require('./GetSolution.Controller')

//Creando un nuevo router
const getSolutionRouter = express.Router()

//Configurando ruta de la API para brindar la solución al culminar el juego
getSolutionRouter.get('/', GuessWordSolutionController)

//Exportando ruta
exports.getSolutionRouter = getSolutionRouter