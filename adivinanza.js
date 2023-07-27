/*
Crear una aplicación adivina_numero_secreto que contenga el código del juego:
● Genera un número aleatorio entre 1 y 100 para que el usuario lo adivine.
● Pide al usuario que ingrese un número y compáralo con el número generado.
● Proporciona retroalimentación al usuario si el número es demasiado alto o demasiado bajo.
● Continúa solicitando números al usuario hasta que adivine el número correcto.
● Muestra un mensaje de felicitaciones cuando el usuario adivina el número.
*/

const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
};
const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    if (numeroAdivinado === numeroSecreto) {
        console.log('¡Felicitaciones! ¡Adivinaste el número secreto!');
    } else if (numeroAdivinado > numeroSecreto) {
        console.log('El número secreto es menor. ¡Sigue intentando!');
    } else {
        console.log('El número secreto es mayor. ¡Sigue intentando!');
    }
};
module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
};




