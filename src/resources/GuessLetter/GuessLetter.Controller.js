//Importando módulos a utilizar
let { word, wordProgress } = require('../NewGame/NewGame.Controller')

let wordArr = new Array
wordArr = word.split("")
let wordProgressArr = new Array

//Método que captura una letra y evalua si la palabra genera al azar la posee o no
exports.gLetter = (req, res, next) => {
    res.setHeader("Content-Type", "text/html")
    let choseLetters = []
    let attemps = 6
    let letter
    
    while (attemps > 0) {
        letter = req.body.letter
        //Validando la letra ingresada
        if (letter.length === 1 && letter.toLowerCase().charCodeAt(0) >= 97 && letter.toLowerCase().charCodeAt(0) <= 122) {
            //
            if (choseLetters.includes(letter)) {
                res.status(304)
            } else if (word.includes(letter)) {
                for (let i = 0; i < word.length; i++) {
                    if (wordArr[i] === letter.toLowerCase()) {
                        wordProgressArr = wordProgress.split("")
                        wordProgressArr[i + i] = letter
                        wordProgress = wordProgressArr.join("")   
                        // if (i === (word.length - 1)) {
                        //     res.send("<p>" + wordProgress + "<br>Intentos restantes: " + attemps + "</p>")
                        //     attemps--
                        // }  
                    }
                }    
                choseLetters.push(letter)    

                if (wordProgress.replace(/ /g, "") === word) {
                    res.send("<p>" + wordProgress + "<br>Intentos restantes: " + attemps + "</p><b>¡Ganaste!</b>")
                    res.end()
                } else {
                    res.send("<p>" + wordProgress + "<br>Intentos restantes: " + attemps + "</p>")
                    next()
                }   
            } else {
                --attemps
                choseLetters.push(letter)    

                if (attemps === 0) {
                    res.send("Juego terminado. La respuesta correcta es: " + word)
                    res.end()
                } else {
                    res.send("<p>" + wordProgress + "<br>Intentos restantes: " + attemps + "</p>")
                    next()
                }
            }
            //
        } else {
            res.send("<p>" + wordProgress + "<br>Intentos restantes: " + attemps + "</p>El valor ingresado no es válido. Inténtelo nuevamente.")
            next()
        }        
    }  
}
