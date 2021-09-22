//Importando módulos a utilizar
const fs = require('fs');

//Método que obtiene una palabra al azar de la lista de palabras del archivo words.txt
const getRandomWord = () => {
    let data = fs.readFileSync('src/words.txt', "utf8")
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

//Método encargado de iniciar un nuevo juego
exports.startGame = (req, res) => {
    globalThis.word = getRandomWord()
    globalThis.wordProgress = hangmanWord()

    exports.word = word
    exports.wordProgress = wordProgress
    //word = this.word
    //wordProgress = this.wordProgress

    res.send("<body bgcolor='slateblue' style='color: white'><p style='border:2px solid white; width: 130px; padding: 5px'>¡Adivina la palabra!</p><p>" + wordProgress + "</p></body>")
}

