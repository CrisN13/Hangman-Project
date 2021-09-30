//Importando módulos a utilizar
const { GetWord } = require('../Data/Game')

//Método que muestra la solución del juego
module.exports.GuessWordSolutionController = (req, res) => {
    let word = GetWord()
    return res.send("<body bgcolor='slateblue' style='color: white'>La palabra correcta es: <b>" + word + "</b></body>")
}
