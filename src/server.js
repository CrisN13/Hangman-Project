//Importando módulos a utilizar
const express = require('express')
const { json, urlencoded } = require('body-parser')
const { newGame }= require('./resources/NewGame/NewGame.Router')
const { guessLetter } = require('./resources/GuessLetter/GuessLetter.Router')
const { getSolution } = require('./resources/GetSolution/GetSolution.Router')
const { getHint } = require('./resources/GetHint/GetHint.Router')

const app = express()

app.disable('x-powered-by')
app.use(urlencoded({
    extended: true
}))
app.use(json())

//Manejando rutas de la API
app.use('/hangman', newGame)
app.use('/hangman', guessLetter)
app.use('/hangman', getSolution)
app.use('/hangman/hint', getHint)

const port = process.env.PORT || 8080

//Método que crea el servidor
exports.start = () => {
    //Validando funcionamiento de la API
    try {
        app.listen(port)
    } catch (err) {
        console.error(err)
    }
}


