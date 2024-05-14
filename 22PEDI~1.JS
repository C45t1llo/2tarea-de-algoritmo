//Pedir al usuario el monto total de una factura y el año de la compra. Luego, calcular
//y mostrar el monto total a pagar incluyendo el IVA. Si el año de la compra es menor
//al 2024 el porcentaje del IVA es del 12% caso contrario aplicar el IVA del 15%.
//Algoritmo CalcularTotalConIVA
    //Definir montoTotal, añoCompra, porcentajeIVA, montoIVA, montoTotalPagar Como Entero

    //montoTotal <- 1500 // Ingresa el monto total de la factura
    //añoCompra <- 2023 // Ingresa el año de la compra

    //Si añoCompra < 2024 Entonces
      //  porcentajeIVA <- 12
    //Sino
      //  porcentajeIVA <- 15
    //Fin Si

    //montoIVA <- montoTotal * (porcentajeIVA / 100)
    //montoTotalPagar <- montoTotal + montoIVA

  //  Escribir "El monto total a pagar incluyendo el IVA es: $" + montoTotalPagar
//Fin Algoritmo

const montoTotal = 500; // Ingresa el monto total de la factura
const añoCompra = 2023; // Ingresa el año de la compra

let porcentajeIVA;

if (añoCompra < 2024) {
    porcentajeIVA = 12;
} else {
    porcentajeIVA = 15;
}

const montoIVA = montoTotal * (porcentajeIVA / 100);
const montoTotalPagar = montoTotal + montoIVA;

console.log("El monto total a pagar incluyendo el IVA es: $" + montoTotalPagar.toFixed(2));
