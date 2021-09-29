//Importando módulos a utilizar
let newGameController = require('../NewGame/NewGame.Controller')

//Declaración de variables de proceso globales
globalThis.word 
globalThis.wordProgress
globalThis.attemps
globalThis.choseLetters

//Asignación de valores a variables globales
word = newGameController.word
wordProgress = newGameController.wordProgress
attemps = newGameController.attemps
choseLetters = newGameController.choseLetters

//Exportación de las variables
exports.word = word
exports.wordProgress = wordProgress
exports.attemps = attemps
exports.choseLetters = choseLetters    


// class DataGame {
//     constructor (word, wordProgress, attemps, choseLetters) {
//         //Asignación de valores a variables globales
//         this.word = word;
//         this.wordProgress = wordProgress;
//         this.attemps = attemps;
//         this.choseLetters = choseLetters;
//     }

//     get Word() {
//         return this.word;
//     }

//     get WordProgress() {
//         return this.wordProgress;
//     }

//     get Attemps() {
//         return this.attemps;
//     }

//     get ChoseLetters() {
//         return this.choseLetters;
//     }
// }

// const dataGame = new DataGame(newGameController.word, newGameController.wordProgress, newGameController.attemps, newGameController.choseLetters)
// module.exports.dataGame = dataGame
//Exportación de las variables
// exports.word = word
// exports.wordProgress = wordProgress
// exports.attemps = attemps
// exports.choseLetters = choseLetters    


// exports.DataGame = () => {
// }