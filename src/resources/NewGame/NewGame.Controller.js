//Importando módulos a utilizar
const fs = require('fs');

//Declaración de variables de proceso globales
globalThis.word 
globalThis.wordProgress
globalThis.attemps
globalThis.choseLetters

//Método que obtiene una palabra al azar de la lista de palabras del archivo words.txt
const GetRandomWord = () => {
    let data = fs.readFileSync('src/words.txt', "utf8")
    let wordList = data.split("\n")
    let numRandom = Math.floor(Math.random() * (wordList.length - 1))
    return wordList[numRandom]
} 

//Método que crea el número de espacios por cada letra de la palabra elegida al azar
const HangmanWord = () => {
    let wordProgressHolder = ""
    let wordHolder = word.trim()
    for (let i = 0; i < wordHolder.length; i++) {
        wordProgressHolder += "_ "
    }
    return wordProgressHolder
}

//Método encargado de iniciar un nuevo juego
exports.StartGameController = (req, res) => {
    //Asignación de valores a variables globales
    word = GetRandomWord()
    wordProgress = HangmanWord()
    attemps = 6
    choseLetters = []

    //Exportación de las variables
    module.exports.word = word
    module.exports.wordProgress = wordProgress
    module.exports.attemps = attemps
    module.exports.choseLetters = choseLetters
    
    return res.send("<body bgcolor='slateblue' style='color: white'><p style='border:2px solid white; width: 130px; padding: 5px'>¡Adivina la palabra!</p><p>" + wordProgress + "</p></body>")
}

