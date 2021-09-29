//Importando módulos a utilizar
const dataGame = require('../Data/Game')

//Método que muestra la solución del juego
module.exports.GuessWordSolutionController = (req, res) => {
    let word =  dataGame.word
    console.log(dataGame.word)
    return res.send("<body bgcolor='slateblue' style='color: white'>La palabra correcta es: <b>" + word + "</b></body>")
}
