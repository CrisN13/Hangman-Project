//Importando módulos a utilizar
let newGame = require('../NewGame/NewGame.Controller')

// globalThis.WordArr
// globalThis.WordProgressArr
// globalThis.ChoseLetters
// globalThis.Attemps
// globalThis.WordProgress

globalThis.word = ""
globalThis.WordProgress
globalThis.wordProgress = this.WordProgress
globalThis.wordArr
globalThis.wordProgressArr = this.WordProgress
globalThis.ChoseLetters
globalThis.choseLetters = this.ChoseLetters
globalThis.Attemps
globalThis.attemps = this.Attemps

// globalThis.choseLetters = this.ChoseLetters
// globalThis.attemps = this.Attemps
// globalThis.wordProgress =this. WordProgressArr

const prueba = (req, res) => {
    let letter = req.body.letter
    letter = letter.toLowerCase()
    //Validando la letra ingresada
    if (letter.length === 1 && letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {
        //Error
        if (choseLetters.includes(letter)) {
            res.status(304).send()
            //res.send("<p>" + wordProgress + "<br>Intentos restantes: " + attemps + "</p>El valor ingresado ya ha sido introducido. Intente ingresar uno diferente")
        } else if (word.includes(letter)) {
            for (let i = 0; i < word.length; i++) {
                if (wordArr[i] === letter) {
                    wordProgressArr = wordProgress.split("")
                    wordProgressArr[i + i] = letter
                    wordProgress = wordProgressArr.join("")   
                }
            }    
            choseLetters.push(letter)    

            if ((wordProgress.replace(/ /g, "")).trim() === word.trim()) {
                res.send("<body bgcolor='slateblue' style='color: white'><p>" + wordProgress + "<br>Intentos restantes: " + attemps + "</p><b style='border:2px solid white; width: 130px; padding: 5px'>¡Ganaste!</b></body>")
                res.end()
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
    
    word = newGame.word
    WordProgress = newGame.wordProgress
    wordArr = word.split("")
    Attemps = newGame.attemps
    ChoseLetters = newGame.choseLetters
    //WordArr = new Array

    if ((wordProgress.replace(/ /g, "")).trim() === word.trim()) {
        res.send("<body bgcolor='slateblue' style='color: white'><p>" + wordProgress + "<br>Intentos restantes: " + attemps + "</p><b style='border:2px solid white; width: 130px; padding: 5px'>¡Ganaste!</b></body>")
        res.end()
    } else if (attemps === 0) {
        res.send("<body bgcolor='slateblue' style='color: white'><p><b>Juego terminado.</b></p>La respuesta correcta es: <u>" + word + "</u></body>")
        res.end()
    } else {
        while (attemps > 0) {
            return  prueba(req, res)
        }      
    }
}

                    // if (i === (word.length - 1)) {
                    //     res.send("<p>" + wordProgress + "<br>Intentos restantes: " + attemps + "</p>")
                    //     attemps--
                    // }