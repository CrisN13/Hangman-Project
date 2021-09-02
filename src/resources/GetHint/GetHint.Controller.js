const { word, wordProgress} = require('../NewGame/NewGame.Controller')

const gHint = (req, res) => {
    for (let i = 0; i < word.length; i++) {
        if (wordProgress[i + i] === "_") {
            wordProgress[i + i] = word[i]
            break
        }
    }
    res.send("La pista es: " + wordProgress)
}

exports.gHint