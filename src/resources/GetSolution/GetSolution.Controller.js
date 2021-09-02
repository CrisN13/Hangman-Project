const word = require('../NewGame/NewGame.Controller')

const gSolution = (req, res) => {
    res.send("La palabra correcta es: " + word)
}

exports.gSolution = gSolution