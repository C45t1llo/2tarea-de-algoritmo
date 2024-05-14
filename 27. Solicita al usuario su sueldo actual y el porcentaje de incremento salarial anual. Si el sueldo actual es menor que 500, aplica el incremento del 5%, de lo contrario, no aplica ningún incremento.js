//. Solicita al usuario su sueldo actual y el porcentaje de incremento salarial anual. Si el
//sueldo actual es menor que 500, aplica el incremento del 5%, de lo contrario, no
//aplica ningún incremento. Calcula y muestra el sueldo esperado con el incremento
//aplicado
//Algoritmo CalcularSueldoEsperado
    //Definir sueldoActual, porcentajeIncremento, sueldoEsperado Como Real

    //sueldoActual <- 450 // Sueldo actual
    //porcentajeIncremento <- 5 // Porcentaje de incremento salarial anual

    //Si sueldoActual < 500 Entonces
      //  sueldoEsperado <- sueldoActual + (sueldoActual * (porcentajeIncremento / 100))
    //Sino
      //  sueldoEsperado <- sueldoActual
    //Fin Si

  //  Escribir "El sueldo esperado con el incremento aplicado es: $" + sueldoEsperado
//Fin Algoritmo
const sueldoActual = 450; // Sueldo actual
const porcentajeIncremento = 5; // Porcentaje de incremento salarial anual

let sueldoEsperado;

if (sueldoActual < 500) {
    sueldoEsperado = sueldoActual + (sueldoActual * (porcentajeIncremento / 100));
} else {
    sueldoEsperado = sueldoActual;
}

console.log("El sueldo esperado con el incremento aplicado es: $" + sueldoEsperado.toFixed(2));
