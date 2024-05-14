//Escribir un algoritmo que lea cuatro números y determine si el numero 1 es divisor
//del numero3 Y si el numero 2 es el doble del numero4.
//Algoritmo DeterminarPropiedades
  //  Definir numero1, numero2, numero3, numero4, esDivisor1, esDoble Como Entero

    // Leer cuatro números
    //numero1 <- 10 // Cambiar por la entrada del usuario
    //numero2 <- 20 // Cambiar por la entrada del usuario
    //numero3 <- 9  // Cambiar por la entrada del usuario
    //numero4 <- 18 // Cambiar por la entrada del usuario

    // Determinar si el número 1 es divisor del número 3
    //esDivisor1 <- numero3 MOD numero1 = 0

    // Determinar si el número 2 es el doble del número 4
    //esDoble <- numero2 = numero4 * 2

    // Mostrar los resultados
    //Escribir "El número 1 es divisor del número 3:", esDivisor1
    //Escribir "El número 2 es el doble del número 4:", esDoble
//FinAlgoritmo

// Leer cuatro números
let numero1 = 10; // Cambiar por la entrada del usuario
let numero2 = 20; // Cambiar por la entrada del usuario
let numero3 = 9; // Cambiar por la entrada del usuario
let numero4 = 18; // Cambiar por la entrada del usuario

// Determinar si el número 1 es divisor del número 3
let esDivisor1 = numero3 % numero1 === 0;

// Determinar si el número 2 es el doble del número 4
let esDoble = numero2 === numero4 * 2;

// Mostrar los resultados
console.log("El número 1 es divisor del número 3:", esDivisor1);
console.log("El número 2 es el doble del número 4:", esDoble);
