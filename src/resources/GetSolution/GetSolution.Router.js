//Importando módulos a utilizar
const express =  require('express')
const { gSolution } = require('./GetSolution.Controller')

//Creando un nuevo router
const getSolution = express.Router()

//Configurando ruta de la API para brindar la solución al culminar el juego
getSolution.get('/', gSolution)

//Exportando ruta
exports.getSolution = getSolution