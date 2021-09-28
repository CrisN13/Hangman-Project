//Importando módulos a utilizar
const express =  require('express')
const { GuessLetterController } = require('./GuessLetter.Controller')

//Creando un nuevo router
const guessLetterRouter = express.Router()

//Configurando ruta de la API para cuando el usuario ingrese una letra y la evalue
guessLetterRouter.put('/', GuessLetterController)

//Exportando ruta
exports.guessLetterRouter = guessLetterRouter