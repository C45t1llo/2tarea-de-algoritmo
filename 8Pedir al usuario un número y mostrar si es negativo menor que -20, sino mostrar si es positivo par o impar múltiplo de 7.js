//Algoritmo VerificarNumero
//Definir numero Como Entero

//numero <- -25

//Si numero < -20 Entonces
  //  Escribir "El número es negativo y menor que -20."
//Sino Si numero > 0 Entonces
    //Si numero % 2 = 0 Entonces
      //  Escribir "El número es positivo y par."
    //Sino Si numero % 7 = 0 Entonces
    //    Escribir "El número es positivo e impar y múltiplo de 7."
  //  Fin Si
//Sino
  //  Escribir "El número es positivo e impar pero no es múltiplo de 7."
//Fin Si
//Fin Algoritmo

const numero = 2; // Puedes cambiar este número según necesites para probar diferentes casos

if (numero < -20 && numero < 0) {
    console.log("El número que ingresaste es negativo y menor que -20.");
} else if (numero >= 0) {
    if (numero % 2 === 0) {
        console.log("El número que ingresaste es positivo y par.");
    } else {
        console.log("El número que ingresaste es positivo e impar.");
    }
} else {
    if (numero % 7 === 0) {
        console.log("El número que ingresaste es negativo y múltiplo de 7.");
    } else {
        console.log("El número que ingresaste es negativo y no es múltiplo de 7.");
    }
}
