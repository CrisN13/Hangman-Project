const express =  require('express')
const {gLetter} = require('./GuessLetter.Controller')

const guessLetter = express.Router()

guessLetter.post('/', gLetter)

exports.guessLetter = guessLetter