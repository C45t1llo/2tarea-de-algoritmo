// 21. Solicitar al usuario un número y mostrar si es un número de un solo dígito. 

//Algoritmo VerificarUnicoDigito
//Definir numero Como Entero

//Escribir "Por favor, ingresa un número:"
//Leer numero

//Si numero >= 0 y numero <= 9 Entonces
  //  Escribir "El número es un número de un solo dígito."
//Sino
  //  Escribir "El número no es un número de un solo dígito."
//Fin Si
//Fin Algoritmo
const numero = 5; // podemos cambiar este numero 

if (numero >= 0 && numero <= 9) {
    console.log("El número es un número de un solo dígito.");
} else {
    console.log("El número no es un número de un solo dígito.");
}
