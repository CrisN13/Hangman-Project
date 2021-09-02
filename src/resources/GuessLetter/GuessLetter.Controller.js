//Método que captura una letra y evalua si la palabra genera al azar la posee o no
module.exports.gLetter = (req, res) => {
    //Importando módulos a utilizar
    const { word, wordProgress } = require('../NewGame/NewGame.Controller')
    const readline = require('readline')

    const choseLetters = new Array
    //let ans
    let attemps = 6

    //Creando interfaz para capturar la letra
    const interfaceData = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    while (attemps > 0) {
        //Capturando la letra ingresada por teclado
        interfaceData.question("Ingrese una letra: "), (ans) => {
            console.log(ans)
            ans = "a"

            //Validando la letra ingresada
            if (ans.length === 1 && ans.toLowerCase().charCodeAt(0) >= 97 && ans.toLowerCase().charCodeAt(0) <= 122) {
                if (ans in cache) {
                    res.status(304).end()
                } else {
                    for (let i = 0; i < word.length; i++) {
                        if (wordProgress === word) {
                            res.send("¡Ganaste!")
                        }
                        else if (word[i] === ans.toLowerCase()) {
                            wordProgress[i + i].replace(ans)
                            console.log(wordProgress)
                        }
                    }    
                    choseLetters.push(ans)
                    attemps--    
                }
            } else {
                console.log("El valor ingresado no es válido. Inténtelo nuevamente.")
            }    
        }    
            interfaceData.close()
    }    
    res.send("Juego terminado. La respuesta correcta es: " + word)
}
