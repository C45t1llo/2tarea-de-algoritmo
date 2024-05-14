//18. Pedir al usuario un número y mostrar si es múltiplo de 3 y par. 

// Algoritmo MultiploDe3YPar
//Definir numero Como Entero

//Escribir "Por favor, ingresa un número:"
//Leer numero

//Si numero MOD 3 = 0 Y numero MOD 2 = 0 Entonces
  //  Escribir "El número es múltiplo de 3 y par."
//Sino
 //   Escribir "El número no es múltiplo de 3 y par."
//Fin Si
//Fin Algoritmo
const numero = 12; // Puedes cambiar este número según necesites para probar diferentes casos

if (numero % 3 === 0 && numero % 2 === 0) {
    console.log("El número es múltiplo de 3 y par.");
} else {
    console.log("El número no es múltiplo de 3 y par.");
}
