//Importando módulos a utilizar
const fs = require('fs');

//Método que obtiene una palabra al azar de la lista de palabras del archivo words.txt
const getRandomWord = () => {
    let data = fs.readFileSync('./words.txt', "utf8")
    let wordList = data.split("\n")
    let numRandom = Math.floor(Math.random() * (wordList.length - 1))
    return wordList[numRandom]
} 

//Método que crea el número de espacios por cada letra de la palabra elegida al azar
const hangmanWord = () => {
    let wProgress = ""
    for (let i = 1; i < word.length; i++) {
        wProgress += "_ "
    }
    return wProgress
}

let word = getRandomWord()
let wordProgress = hangmanWord()

//Método encargado de iniciar un nuevo juego
exports.startGame = (req, res) => {
    let imprimir = "¡Adivina la palabra!"
    res.send("<p>" + imprimir + "<br>" + wordProgress + word + "</p>")
}

exports.word
exports.wordProgress