/*
Crear una aplicación adivina_numero_secreto que contenga el código del juego:
● Genera un número aleatorio entre 1 y 100 para que el usuario lo adivine.
● Pide al usuario que ingrese un número y compáralo con el número generado.
● Proporciona retroalimentación al usuario si el número es demasiado alto o demasiado bajo.
● Continúa solicitando números al usuario hasta que adivine el número correcto.
● Muestra un mensaje de felicitaciones cuando el usuario adivina el número.
*/

const readlineSync = require('readline-sync');
const { generarNumeroAleatorio, verificarAdivinanza } = require('./adivinanza');
const obtenerNumeroUsuario = () => {
    return readlineSync.question('Ingresa un número: ');
};
const juegoAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;
    console.log('¡Bienvenido a Adivina el número secreto!');
    console.log('Intenta adivinar el número del 1 al 100.\n');
    //console.log(numeroSecreto); 
    while (numeroAdivinado !== numeroSecreto) {
        numeroAdivinado = parseInt(obtenerNumeroUsuario());
        verificarAdivinanza(numeroSecreto, numeroAdivinado);
        //console.log(typeof(numeroAdivinado));
    }
};
juegoAdivinanza();