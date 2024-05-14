//13. Pedir al usuario un número y mostrar si es par o impar. 

//Algoritmo ParOImpar
    //Definir numero, residuo Como Entero

    //Escribir "Por favor, ingresa un número:"
    //Leer numero

    //residuo <- numero MOD 2

  //  Si residuo = 0 Entonces
      //  Escribir "El número es par."
    //Sino
  //      Escribir "El número es impar."
   // Fin Si
//Fin Algoritmo

const numero = 7; // Puedes cambiar este número según necesites para probar diferentes casos

if (numero % 2 === 0) {
    console.log("El número es par.");
} else {
    console.log("El número es impar.");
}
