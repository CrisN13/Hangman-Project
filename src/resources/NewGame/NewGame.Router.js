const express =  require('express')
const {startGame} = require('./NewGame.Controller')

const newGame = express.Router()

newGame.post('/', startGame)

exports.newGame = newGame