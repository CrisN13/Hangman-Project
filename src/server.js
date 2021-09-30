//Importando módulos a utilizar
const express = require('express')
const { json, urlencoded } = require('body-parser')
const { newGameRouter }= require('./resources/NewGame/NewGame.Router')
const { guessLetterRouter } = require('./resources/GuessLetter/GuessLetter.Router')
const { getSolutionRouter } = require('./resources/GetSolution/GetSolution.Router')
const { getHintRouter } = require('./resources/GetHint/GetHint.Router')

const app = express()

app.disable('x-powered-by')
app.use(urlencoded({
    extended: true
}))
app.use(json())

//Manejando rutas de la API
app.use('/hangman', newGameRouter)
app.use('/hangman', guessLetterRouter)
app.use('/hangman', getSolutionRouter)
app.use('/hangman/hint', getHintRouter)

const port = process.env.PORT || 8080

//Método que crea el servidor
exports.Start = () => {
    //Validando funcionamiento de la API
    try {
        app.listen(port)
    } catch (err) {
        console.error(err)
    }
}


