//14. Solicitar al usuario un número y mostrar si es positivo o negativo. 

//Algoritmo PositivoONegativo
//Definir numero Como Entero

//Escribir "Por favor, ingresa un número:"
//Leer numero

//Si numero > 0 Entonces
  //  Escribir "El número es positivo."
//Sino Si numero < 0 Entonces
  //  Escribir "El número es negativo."
//Sino
  //  Escribir "El número es cero."
//Fin Si
//Fin Algoritmo

const numero = 5; // Puedes cambiar este número según necesites para probar diferentes casos

if (numero > 0) {
    console.log("El número es positivo.");
} else if (numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}
