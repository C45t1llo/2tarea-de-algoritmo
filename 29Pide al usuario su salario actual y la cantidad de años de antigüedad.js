//Pide al usuario su salario actual y la cantidad de años de antigüedad. Calcule el valor
//del bono de antigüedad del empleado aplicando el 3% del salario por el número de
//años de antigüedad siempre y cuando supere los 3 años, caso contrario el bono de
//antigüedad es de cero. Se pide mostrar el salaria y el bono de antigüedad.
//Algoritmo CalcularBonoAntiguedad
//    Definir salarioActual, añosAntiguedad, bonoAntiguedad Como Real

    //salarioActual <- 3000 // Salario actual del empleado
    //añosAntiguedad <- 5 // Años de antigüedad del empleado

   // Si añosAntiguedad > 3 Entonces
    //    bonoAntiguedad <- salarioActual * (3 / 100) * añosAntiguedad
    //Sino
      //  bonoAntiguedad <- 0
    //Fin Si

    //Escribir "Salario actual del empleado: $" + salarioActual
  //  Escribir "Bono de antigüedad del empleado: $" + bonoAntiguedad
//Fin Algoritmo
const salarioActual = 3000; // Salario actual del empleado
const añosAntiguedad = 5; // Años de antigüedad del empleado

let bonoAntiguedad;

if (añosAntiguedad > 3) {
    bonoAntiguedad = salarioActual * (3 / 100) * añosAntiguedad;
} else {
    bonoAntiguedad = 0;
}

console.log("Salario actual del empleado: $" + salarioActual);
console.log("Bono de antigüedad del empleado: $" + bonoAntiguedad);
