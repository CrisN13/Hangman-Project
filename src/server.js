//Importando módulos a utilizar
const express = require('express')
const { newGame }= require('./resources/NewGame/NewGame.Router')
const app = express()

app.disable('x-powered-by')

//Manejando rutas de la API
app.use('/hangman', newGame)
//app.use('/hangman', guessLetter)
// app.use('/hangman', getSolution)
// app.use('hangman/hint', getHint)

//Métpdo que crea el servidor
exports.start = () => {
    try {
        app.listen(3000)
        console.log('Connected to port 3000!')
    } catch (err) {
        console.error(err)
    }
}


