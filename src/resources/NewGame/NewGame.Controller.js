//Impotando módulos a utilizar
const fs = require('fs');

//Método que obtiene una palabra al azar de la lista de palabras del archivo words.txt
const getRandomWord = () => {
    let data = fs.readFileSync('./words.txt', "utf8")
    let wordList = data.split("\n")
    let numRandom = Math.floor(Math.random() * (wordList.length - 1))
    return wordList[numRandom]
} 

let word = getRandomWord()

//Método encargado de iniciar un nuevo juego
exports.startGame = (req, res) => {
    let wordProgress = ""
    for (let i = 1; i < word.length; i++) {
        wordProgress += "_ "
    }
    let imprimir = "¡Adivina la palabra!"
    res.send("<p>" + imprimir + "<br>" + wordProgress + word + "</p>")
}

exports.word