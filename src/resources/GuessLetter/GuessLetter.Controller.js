
const gLetter = (req, res) => {
    //Importando módulos a utilizar
    const word = require('../NewGame/NewGame.Controller')
    const wordProgress = require('../NewGame/NewGame.Controller')
    const readline = require('readline')

    const choseLetters = new Array
    //let ans
    let attemps = 6

    const interfaceData = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    while (attemps > 0) {
        interfaceData.question("Ingrese una letra: "), (ans) => {
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

exports.gLetter = gLetter