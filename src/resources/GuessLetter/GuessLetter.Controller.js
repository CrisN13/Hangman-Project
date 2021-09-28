//Importando módulos a utilizar
let newGameRouter = require('../newGame/newGame.Controller')

//Declarando variables de proceso de manera global
globalThis.word = ""
globalThis.wordProgressHolder
globalThis.wordProgress = this.wordProgressHolder
globalThis.wordArray
globalThis.wordProgressArray = this.wordProgressHolder
globalThis.choseLettersHolder
globalThis.choseLetters = this.choseLettersHolder
globalThis.attempsHolder
globalThis.attemps = this.attempsHolder

//Función encargada de validar los datos ingresados por el usuario de la API y determinar
//la bifurcación que tendrá el código. En general contiene la lógica principal del juego
const ValidateLetter = (req, res) => {
    //Capturando valor ingresado
    let letter = req.body.letter
    letter = letter.toLowerCase()

    //Validando la letra ingresada
    if (letter.length === 1 && letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {
        if (choseLetters.includes(letter)) {  //Verifica si la letra ya ha sido ingresada, en caso de ser así, genera un status 304
            res.status(304).send()
        } else if (word.includes(letter)) {  //Verifica que la letra ingresada sea parte de la palabra generada al azar
            //Itera dentro de la palabra para sustituir todas las coincidencias
            for (let i = 0; i < word.length; i++) {
                if (wordArray[i] === letter) {
                    wordProgressArray = wordProgress.split("")
                    wordProgressArray[i + i] = letter
                    wordProgress = wordProgressArray.join("")   
                }
            }    
            choseLetters.push(letter)    

            //Si el asuario adivina la palabra genera un mensaje confirmando que ganó, sino imprime el avance y los intentos restantes
            if ((wordProgress.replace(/ /g, "")).trim() === word.trim()) {
                res.send("<body bgcolor='slateblue' style='color: white'><p>" + wordProgress + "<br>Intentos restantes: " + attemps + "</p><b style='border:2px solid white; width: 130px; padding: 5px'>¡Ganaste!</b></body>")
                res.end()
            } else {
                res.send("<body bgcolor='slateblue' style='color: white'><p>" + wordProgress + "<br>Intentos restantes: " + attemps + "</p></body>")
            }   
        } else { //Este else se activa cuando se ha ingresado un valor correcto, pero este no existe dentro de la palabra generada
            attemps--
            choseLetters.push(letter)    

            //Si los intentos disponibles llegaran a 0, el juego termina y le dice al usuario la respuesta correcta. Sino
            //imprime los intentos restantes y el avance
            if (attemps === 0) {
                res.send("<body bgcolor='slateblue' style='color: white'><p><b>Juego terminado.</b></p>La respuesta correcta es: <u>" + word + "</u></body>")
                res.end()
            } else {
                res.send("<body bgcolor='slateblue' style='color: white'><p>" + wordProgress + "<br>Intentos restantes: " + attemps + "</p></body>")
            }
        }
    } else { //Este else se activa cuando se ha ingresado un dato que no es válido
        res.send("<body bgcolor='slateblue' style='color: white'><p>" + wordProgress + "<br>Intentos restantes: " + attemps + "</p>El valor ingresado no es válido. Inténtelo nuevamente.</body>")
    }        
}

//Método que captura una letra y evalua si la palabra generada al azar la posee o no
exports.GuessLetterController = (req, res) => {
    res.setHeader("Content-Type", "text/html")
    
    //Asignación de valores a las variables globales
    word = newGameRouter.word
    wordProgressHolder = newGameRouter.wordProgress
    wordArray = word.split("")
    attempsHolder = newGameRouter.attemps
    choseLettersHolder = newGameRouter.choseLetters

    try {
        //Si el asuario adivina la palabra genera un mensaje confirmando que ganó y evita que se salga de
        //el área de gane hasta que se genere un nuevo juego
        if ((wordProgress.replace(/ /g, "")).trim() === word.trim()) {
             res.send("<body bgcolor='slateblue' style='color: white'><p>" + wordProgress + "<br>Intentos restantes: " + attemps + "</p><b style='border:2px solid white; width: 130px; padding: 5px'>¡Ganaste!</b></body>")
             res.end()
        } else if (attemps === 0) {  //Si los intentos disponibles llegaran a 0, el juego termina y le dice al usuario la respuesta correcta.
            res.send("<body bgcolor='slateblue' style='color: white'><p><b>Juego terminado.</b></p>La respuesta correcta es: <u>" + word + "</u></body>")
            res.end()
        } else { //Si el juego no ha terminado, ejecuta el while con la lógica del programa
            while (attemps > 0) {
                return ValidateLetter(req, res)
            }      
        }
    } catch (error) {
        res.status(404).send()
    }
}
