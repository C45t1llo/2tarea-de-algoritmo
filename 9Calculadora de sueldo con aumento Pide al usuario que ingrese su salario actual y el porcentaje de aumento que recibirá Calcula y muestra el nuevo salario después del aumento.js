//Calculadora de sueldo con aumento: Pide al usuario que ingrese su salario actual y el
//porcentaje de aumento que recibirá. Calcula y muestra el nuevo salario después del
//aumento.
//Algoritmo CalculadoraSueldoConAumento
//Definir salarioActual, porcentajeAumento, nuevoSalario Como Real

//salarioActual <- 3000  // Salario actual del empleado
//porcentajeAumento <- 10 // Porcentaje de aumento salarial

// Calculamos el nuevo salario sumando el aumento al salario actual
//nuevoSalario <- salarioActual + (salarioActual * (porcentajeAumento / 100))

//Escribir "El nuevo salario después del aumento es: $" + nuevoSalario
//Fin Algoritmo

const salarioActual = 950; // Define el salario actual
const porcentajeAumento = 10; // Define el porcentaje de aumento

// Calcula el nuevo salario después del aumento
const nuevoSalario = salarioActual * (1 + porcentajeAumento / 100);

console.log("Tu nuevo salario después del aumento es: " + nuevoSalario.toFixed(2));
