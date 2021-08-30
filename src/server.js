import express from 'express'
import newGame from './resources/NewGame/NewGame.Router'
export const app = express()

app.disable('x-powered-by')

app.post('/hangman', newGame)
app.put('/hangman', guessLetter)
app.get('/hangman', getSolution)
app.get('hangman/hint', getHint)

export const start = async () => {
    try {
        app.listen(3000)
        console.log('Connected to port 3000!')
    } catch (err) {
        console.error(err)
    }
}