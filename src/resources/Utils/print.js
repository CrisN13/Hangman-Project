
exports.PrintPreview = (wordProgress, attemps) => {
    let result
    result = "<body bgcolor='slateblue' style='color: white'><p>" + wordProgress + "<br>Intentos restantes: " + attemps + "</p></body>"
    return result
}

exports.PrintWin = (wordProgress, attemps) => {
    let result
    result = "<body bgcolor='slateblue' style='color: white'><p>" + wordProgress + "<br>Intentos restantes: " + attemps + "</p><b style='border:2px solid white; width: 130px; padding: 5px'>¡Ganaste!</b></body>"
    return result
}

exports.PrintLose = (word) => {
    let result
    result = "<body bgcolor='slateblue' style='color: white'><p><b>Juego terminado.</b></p>La respuesta correcta es: <u>" + word + "</u></body>"
    return result
}

exports.PrintInvalid = (wordProgress, attemps) => {
    let result
    result = "<body bgcolor='slateblue' style='color: white'><p>" + wordProgress + "<br>Intentos restantes: " + attemps + "</p>El valor ingresado no es válido. Inténtelo nuevamente.</body>"
    return result
}
