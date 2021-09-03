//Importando módulos a utilizar
let { word, wordProgress } = require('../NewGame/NewGame.Controller')
const readline = require('readline')
const bodyparser = require('body-parser')

let wordArr = new Array
wordArr = word.split("")
let wordProgressArr = new Array

//Método que captura una letra y evalua si la palabra genera al azar la posee o no
exports.gLetter = (req, res) => {
    res.setHeader("Content-Type", "text/html")
    let choseLetters = new Array
    choseLetters = []
    let attemps = 6
    
    while (attemps > 0) {
        if (attemps > 0) {
            let letter = req.body.letter
            //Validando la letra ingresada
            if (letter.length === 1 && letter.toLowerCase().charCodeAt(0) >= 97 && letter.toLowerCase().charCodeAt(0) <= 122) {
                if (choseLetters.includes(letter)) {
                    res.status(304).send("Status 304: No modificado")
                } 
                else {
                    for (let i = 0; i < word.length; i++) {
                        if (wordProgress.replace(" ", "") === word) {
                            res.send("<b>¡Ganaste!</b>")
                            res.end()
                        }
                        else if (wordArr[i] === letter.toLowerCase()) {
                            wordProgressArr = wordProgress.split("")
                            wordProgressArr[i + i] = letter
                            wordProgress = wordProgressArr.join("")            
                            res.send("<p>" + wordProgress + "<br>Intentos restantes: " + attemps + "</p>")
                        }
                        else {
                            break
                        }
                    }    
                    attemps--
                    choseLetters.push(letter)
                }
            } 
            else {
                res.send("<p>El valor ingresado no es válido. Inténtelo nuevamente.</p>")
            }        
        } else {
            res.send("Juego terminado. La respuesta correcta es: " + word)
            res.end()          
        }
    }  
}
