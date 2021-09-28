//Importando módulos a utilizar
const newGameRouter = require('../NewGame/NewGame.Controller')

//Método que muestra la solución del juego
module.exports.GuessWordSolutionController = (req, res) => {
    let word =  newGameRouter.word

    res.send("<body bgcolor='slateblue' style='color: white'>La palabra correcta es: <b>" + word + "</b></body>")
}
