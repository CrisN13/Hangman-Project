//Importando módulos a utilizar
let { word, wordProgress } = require('../NewGame/NewGame.Controller')

let wordArr = new Array
wordArr = word.split("")
let letter = wordArr[0]
let wordProgressArr = new Array
wordProgress = wordProgress.split("")

//Método que muestra una pista de la palabra
module.exports.gHint = (req, res) => {
    for (let i = 0; i < word.length; i++) {
        if (!(letter in wordProgress)) {
            if (wordArr[i] === letter[0]) {
                wordProgressArr = wordProgress
                wordProgressArr[i + i] = letter
                wordProgressArr = wordProgressArr.join("")
            }
        }
    }
    res.send("La pista es: " + wordProgressArr)
}
