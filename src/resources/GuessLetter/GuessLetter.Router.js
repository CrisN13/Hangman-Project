//Importando módulos a utilizar
const express =  require('express')
const { gLetter } = require('./GuessLetter.Controller')

//Creando un nuevo router
const guessLetter = express.Router()

//Configurando ruta de la API para cuando el usuario ingrese una letra y la evalue
guessLetter.post('/', gLetter)

exports.guessLetter = guessLetter