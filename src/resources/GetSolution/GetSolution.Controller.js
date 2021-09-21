//Importando módulos a utilizar
const { word }  = require('../NewGame/NewGame.Controller')

//Método que muestra la solución del juego
module.exports.gSolution = (req, res) => {
    res.send("<body bgcolor='slateblue' style='color: white'>La palabra correcta es: <b>" + word.toString() + "</b></body>")
}
