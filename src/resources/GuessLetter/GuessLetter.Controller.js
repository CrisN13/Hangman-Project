//Importando módulos a utilizar
const word = require('../NewGame/NewGame.Controller')
const wordProgress = require('../NewGame/NewGame.Controller')
const readline = require('readline')

const choseLetters = new Array
const answer
let attemps = 6

const interfaceData = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

interfaceData.question("Ingrese una letra: "), (answer) => {
    answer = this.answer
    interfaceData.close()
}

const GuessLetter = (req, res) => {
    while (attemps > 0) {
        if (answer.length === 1 && answer.toLowerCase().charCodeAt(0) >= 97 && answer.toLowerCase().charCodeAt(0) <= 122) {
            if (answer in cache) {
                res.status(304).end()
            } else {
                for (let i = 0; i < word.length; i++) {
                    if (word[i] === answer.toLowerCase()) {
                        wordProgress[i + i].replace(answer)
                    }
                }    
            }
            choseLetters.push(answer)
            attemps--
        } else {
            console.log("El valor ingresado no es válido. Inténtelo nuevamente.")
        }    
    }
}

exports.GuessLetter = GuessLetter