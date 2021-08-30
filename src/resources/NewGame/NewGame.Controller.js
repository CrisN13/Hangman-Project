import { NewGame } from "./NewGame.Model"

const fs = require('fs');

const getRandomWord = () => {
    let wordList = fs.readFileSync('./palabras.txt', 'utf8').split
    let numRandom = Math.floor(Math.random() * (wordList.length - 1))
    return wordList[numRandom]
} 

export const startGame = (req, res) => {
    let guessWord = getRandomWord()
    let wordProgress
    for (let i = 0; i < guessWord.length; i++) {
        wordProgress = "_ "
    }
    res.send("¡Adivina la palabra!")
    res.send(wordProgress)
}