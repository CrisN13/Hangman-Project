# Hangman-Project

## Descripción

El siguiente proyecto consiste en el tan conocido juego llamado "Hangman", conocido en español como "Ahocarcado". Es una API la cual contiene las 4 funcionalidades básicas de dicho juego, las cuales se describiran a continuación:

- [Crear un nuevo juego](#crear-un-nuevo-juego)
- [Adivinar una letra](#adivinar-una-letra)
- [Obtener la solución del juego](#obtener-la-solución-del-juego)
- [Obtener una pista](#obtener-una-pista)
- [Colección de Postman](#colección-de-postman)

##
### Crear un nuevo juego
##

Para la creación de una nueva partida se debe utilizar el siguiente endpoint:

`https://hangman-project-elaniin.herokuapp.com/hangman` con el método `Post`

##
### Adivinar una letra
##

Para ingresar una letra se debe utilizar el siguiente endpoint:

`https://hangman-project-elaniin.herokuapp.com/hangman` con el método `Put`

##
### Obtener la solución del juego
##

Para obtener la solución del juego se debe utilizar el siguiente endpoint:

`https://hangman-project-elaniin.herokuapp.com/hangman` con el método `Get`

##
### Obtener una pista
##

Para obtener una pista de la palabra se debe utilizar el siguiente endpoint:

`https://hangman-project-elaniin.herokuapp.com/hangman/hint` con el método `Get`

##
### Colección de Postman
##

Con este link puede importar la colección generada. En ella encontrará los 4 endpoints mencionados anteriormente, y en el caso de `Adivinar una letra`, encontrará la llave(key) `letter` la cual tiene un valor(value) que deberá sustituir por la letra que desea probar.

`https://www.getpostman.com/collections/f08aa9bcfbd656c39442`
