//6. Escribir un algoritmo que lea cuatro números y determine si el numero 1 es la mitad
//del número 2; Y si el numero 3 es divisor del numero4
//Algoritmo DeterminarPropiedades
    //Definir numero1, numero2, numero3, numero4, esMitad, esDivisor Como Entero

    // Leer cuatro números
    //numero1 <- 10 // Cambiar por la entrada del usuario
    //numero2 <- 20 // Cambiar por la entrada del usuario
    //numero3 <- 9  // Cambiar por la entrada del usuario
    //numero4 <- 36 // Cambiar por la entrada del usuario

    // Determinar si el número 1 es la mitad del número 2
    //esMitad <- numero1 * 2 = numero2

    // Determinar si el número 3 es divisor del número 4
    //esDivisor <- numero4 MOD numero3 = 0

    // Mostrar los resultados
    //Escribir "El número 1 es la mitad del número 2:", esMitad
  //  Escribir "El número 3 es divisor del número 4:", esDivisor
//FinAlgoritmo

// Leer cuatro números
let numero1 = 10; // Cambiar por la entrada del usuario
let numero2 = 20; // Cambiar por la entrada del usuario
let numero3 = 9; // Cambiar por la entrada del usuario
let numero4 = 36; // Cambiar por la entrada del usuario

// Determinar si el número 1 es la mitad del número 2
let esMitad = numero1 * 2 === numero2;

// Determinar si el número 3 es divisor del número 4
let esDivisor = numero4 % numero3 === 0;

// Mostrar los resultados
console.log("El número 1 es la mitad del número 2:", esMitad);
console.log("El número 3 es divisor del número 4:", esDivisor);
