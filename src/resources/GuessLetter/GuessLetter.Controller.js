//Importando módulos a utilizar
let newGame = require('../NewGame/NewGame.Controller')

var wordArr = WordArr
var wordProgressArr = WordProgressArr
var choseLetters = ChoseLetters
var attemps = Attemps


const prueba = (req, res) => {
    let letter = req.body.letter
    //Validando la letra ingresada
    if (letter.length === 1 && letter.toLowerCase().charCodeAt(0) >= 97 && letter.toLowerCase().charCodeAt(0) <= 122) {
        //Error
        if (choseLetters.includes(letter)) {
            res.status(304).send()
            //res.send("<p>" + wordProgress + "<br>Intentos restantes: " + attemps + "</p>El valor ingresado ya ha sido introducido. Intente ingresar uno diferente")
        } else if (word.includes(letter)) {
            for (let i = 0; i < word.length; i++) {
                if (wordArr[i] === letter.toLowerCase()) {
                    wordProgressArr = wordProgress.split("")
                    wordProgressArr[i + i] = letter
                    wordProgress = wordProgressArr.join("")   
                }
            }    
            choseLetters.push(letter)    

            if ((wordProgress.replace(/ /g, "")).trim() === word.trim()) {
                res.send("<body bgcolor='slateblue' style='color: white'><p>" + wordProgress + "<br>Intentos restantes: " + attemps + "</p><b style='border:2px solid white; width: 130px; padding: 5px'>¡Ganaste!</b></body>")
            } else {
                res.send("<body bgcolor='slateblue' style='color: white'><p>" + wordProgress + "<br>Intentos restantes: " + attemps + "</p></body>")
            }   
        } else {
            attemps--
            choseLetters.push(letter)    

            if (attemps === 0) {
                res.send("<body bgcolor='slateblue' style='color: white'><p><b>Juego terminado.</b></p>La respuesta correcta es: <u>" + word + "</u></body>")
                res.end()
            } else {
                res.send("<body bgcolor='slateblue' style='color: white'><p>" + wordProgress + "<br>Intentos restantes: " + attemps + "</p></body>")
            }
        }
        //Error
    } else {
        res.send("<body bgcolor='slateblue' style='color: white'><p>" + wordProgress + "<br>Intentos restantes: " + attemps + "</p>El valor ingresado no es válido. Inténtelo nuevamente.</body>")
    }        
}

//Método que captura una letra y evalua si la palabra genera al azar la posee o no
exports.gLetter = (req, res) => {
    res.setHeader("Content-Type", "text/html")
    
    let word = newGame.word
    let wordProgress = newGame.wordProgress
    globalThis.WordArr = new Array
    WordArr = word.split("")
    globalThis.WordProgressArr = new Array
    globalThis.ChoseLetters = []
    globalThis.Attemps = 6

    while (attemps > 0) {
        return prueba(req, res)
    }  
}

                    // if (i === (word.length - 1)) {
                    //     res.send("<p>" + wordProgress + "<br>Intentos restantes: " + attemps + "</p>")
                    //     attemps--
                    // }