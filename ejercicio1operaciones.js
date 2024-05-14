// 1. Para a=8 y b=5, encuentra el valor de v = 2 * b + a div 2 + 4 * b mod a.

//Algoritmo CalcularV
    //Definir a, b, v Como Entero

    //a <- 8
    //b <- 5

    //v <- 2 * b + a Div 2 + 4 * b Mod a

  //  Escribir "El valor de v es: ", v
//FinAlgoritmo

let a = 8;
let b = 5;

let v = 2 * b + Math.floor(a / 2) + 4 * (b % a);

console.log("El valor de v es:", v);
