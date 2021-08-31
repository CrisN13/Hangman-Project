const express = require('express')
//const newGame = require('./resources/NewGame/NewGame.Router')
const app = express()
const Router =  require('express')
const fs = require('fs');

// const getRandomWord = () => {
//     let wordList
//     fs.readFileSync('palabras.txt', 'utf8').split(/r?n/).forEach(() => {
//         wordList.push
//     })
//     let numRandom = Math.floor(Math.random() * (wordList.length - 1))
//     return wordList[numRandom]
// } 

// const startGame = (req, res) => {
//     let guessWord = "hola" //getRandomWord()
//     let wordProgress
//     for (let i = 0; i < guessWord.length; i++) {
//         wordProgress += "_ "
//     }
//     res.send("¡Adivina la palabra!")
//     res.send(wordProgress)
// }

app.disable('x-powered-by')
//const router = Router()

app.post('/hangman', (req, res) => {
    let guessWord = "hola" //getRandomWord()
    let wordProgress = ""
    for (let i = 0; i < guessWord.length; i++) {
        wordProgress += "_ "
    }
    let imprimir = "¡Adivina la palabra!"
    res.send("<p>" + imprimir + "<br>" + wordProgress + "</p>")
    })
// app.put('/hangman', guessLetter)
// app.get('/hangman', getSolution)
// app.get('hangman/hint', getHint)

//router.post('/', startGame())

const start = () => {
    try {
        app.listen(3000)
        console.log('Connected to port 3000!')
    } catch (err) {
        console.error(err)
    }
}

start()

