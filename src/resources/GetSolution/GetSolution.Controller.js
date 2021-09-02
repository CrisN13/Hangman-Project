//Importando módulos a utilizar
const { word }  = require('../NewGame/NewGame.Controller')

//Método que muestra la solución del juego
module.exports.gSolution = (req, res) => {
    res.send("La palabra correcta es: " + word.toString())
}
