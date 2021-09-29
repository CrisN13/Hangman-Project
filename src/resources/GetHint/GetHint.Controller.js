//Importando módulos a utilizar
let dataGame = require('../Data/Game')


//Método que muestra una pista de la palabra
module.exports.GetHintController = (req, res) => {
    //Declarando variables de proceso
    let word = dataGame.word
    let wordProgress = dataGame.wordProgress
    let wordArray = new Array
    wordArray = word.split("")
    let letter = wordArray[0]
    let wordProgressArray = new Array
    wordProgress = wordProgress.split("")

    //Se encarga de mostrar la primer letra de la palabra generada para que el usuario pueda tener
    //una idea de por donde comenzar
    for (let i = 0; i < word.length; i++) {
        if (!(letter in wordProgress)) {
            if (wordArray[i] === letter[0]) {
                wordProgressArray = wordProgress
                wordProgressArray[i + i] = letter
                wordProgressArray = wordProgressArray.join("")
            }
        }
    }
    return res.send("<body bgcolor='slateblue' style='color: white'>La pista es: <b>" + wordProgressArray + "</b></body>")
}
