const fs = require('fs');

const getRandomWord = () => {
    let data = fs.readFileSync('./words.txt', "utf8")
    let wordList = data.split("\n")
    let numRandom = Math.floor(Math.random() * (wordList.length - 1))
    return wordList[numRandom]
} 

exports.startGame = (req, res) => {
    let guessWord = getRandomWord()
    let wordProgress = ""
    for (let i = 1; i < guessWord.length; i++) {
        wordProgress += "_ "
    }
    let imprimir = "¡Adivina la palabra!"
    res.send("<p>" + imprimir + "<br>" + wordProgress + guessWord + "</p>")
}
