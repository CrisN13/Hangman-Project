//Importando módulos a utilizar
const newGame = require('../NewGame/NewGame.Controller')


//Método que muestra la solución del juego
module.exports.gSolution = (req, res) => {
    let word = newGame.word

    res.send("<body bgcolor='slateblue' style='color: white'>La palabra correcta es: <b>" + word + "</b></body>")
}
