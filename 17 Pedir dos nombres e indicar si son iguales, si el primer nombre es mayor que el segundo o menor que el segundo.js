//7. Pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que el
//segundo o menor que el segundo
//Algoritmo CompararNombres
   // Definir nombre1, nombre2 Como Caracteres

    //Escribir "Ingresa el primer nombre:"
    //Leer nombre1
    //Escribir "Ingresa el segundo nombre:"
   // Leer nombre2

    //Si nombre1 == nombre2 Entonces
      //  Escribir "Los nombres son iguales."
    //Sino Si nombre1 < nombre2 Entonces
      //  Escribir "El primer nombre es menor que el segundo."
    //Sino
    //    Escribir "El primer nombre es mayor que el segundo."
  //  Fin Si
//Fin Algoritmo
const nombre1 = "thomas";
const nombre2 = "Elkin";

if (nombre1 === nombre2) {
    console.log("Los nombres son iguales.");
} else if (nombre1 < nombre2) {
    console.log("El primer nombre es menor que el segundo.");
} else {
    console.log("El primer nombre es mayor que el segundo.");
}
