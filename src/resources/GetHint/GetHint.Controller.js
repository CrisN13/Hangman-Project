//Importando módulos a utilizar
let newGame = require('../NewGame/NewGame.Controller')


//Método que muestra una pista de la palabra
module.exports.gHint = (req, res) => {
    let word = newGame.word
    let wordProgress = newGame.wordProgress
    let wordArr = new Array
    wordArr = word.split("")
    let letter = wordArr[0]
    let wordProgressArr = new Array
    wordProgress = wordProgress.split("")
    for (let i = 0; i < word.length; i++) {
        if (!(letter in wordProgress)) {
            if (wordArr[i] === letter[0]) {
                wordProgressArr = wordProgress
                wordProgressArr[i + i] = letter
                wordProgressArr = wordProgressArr.join("")
            }
        }
    }
    res.send("<body bgcolor='slateblue' style='color: white'>La pista es: <b>" + wordProgressArr + "</b></body>")
}
