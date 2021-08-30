import { NewGame } from "./NewGame.Model"

const fs = require('fs');

const getRandomWord = () => {
    let wordList = fs.readFileSync('./palabras.txt', 'utf8').split
    let numRandom = Math.floor(Math.random() * (wordList.length - 1))
    return wordList[numRandom]
} 

export const startGame = (req, res) => {

    res.status(200).json({ data: req.NewGame })
}