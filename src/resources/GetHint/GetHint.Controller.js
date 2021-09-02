//Importando módulos a utilizar
const { word, wordProgress } = require('../NewGame/NewGame.Controller')

//Método que muestra una pista de la palabra
module.exports.gHint = (req, res) => {
    for (let i = 0; i < word.length; i++) {
        if (wordProgress[i + i] === "_") {
            wordProgress[i + i] = word[i]
            break
        }
    }
    res.send("La pista es: " + wordProgress)
}
