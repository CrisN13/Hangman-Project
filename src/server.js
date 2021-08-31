const express = require('express')
const {newGame}= require('./resources/NewGame/NewGame.Router')
const app = express()

app.disable('x-powered-by')

app.use('/hangman', newGame)
// app.put('/hangman', guessLetter)
// app.get('/hangman', getSolution)
// app.get('hangman/hint', getHint)


exports.start = () => {
    try {
        app.listen(3000)
        console.log('Connected to port 3000!')
    } catch (err) {
        console.error(err)
    }
}


