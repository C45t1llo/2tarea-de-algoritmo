//Pide al usuario el total de su cuenta en un restaurante y el porcentaje de descuento
//que ofrece por ser cliente frecuente. Si el total de la cuenta supera los $70, aplica el
//descuento por fidelidad, de lo contrario, no se aplica ningún descuento. Calcula y
//muestra el monto final con el descuento aplicado más el IVA del 15%.
//Algoritmo CalcularMontoFinal
    //Definir totalCuenta, porcentajeDescuento, montoFinal, porcentajeIVA Como Real

    //totalCuenta <- 80 // Total de la cuenta en el restaurante
    //porcentajeDescuento <- 10 // Porcentaje de descuento ofrecido por ser cliente frecuente

    //Si totalCuenta > 70 Entonces
      //  montoFinal <- totalCuenta - (totalCuenta * (porcentajeDescuento / 100))
    //Sino
      //  montoFinal <- totalCuenta
    //Fin Si

    //porcentajeIVA <- 15
    //montoFinal <- montoFinal + (montoFinal * (porcentajeIVA / 100))

  //  Escribir "El monto final con el descuento aplicado más el IVA es: $" + montoFinal
//Fin Algoritmo
const totalCuenta = 80; // Total de la cuenta en el restaurante
const porcentajeDescuento = 10; // Porcentaje de descuento ofrecido por ser cliente frecuente

let montoFinal;
const porcentajeIVA = 15;

if (totalCuenta > 70) {
    montoFinal = totalCuenta - (totalCuenta * (porcentajeDescuento / 100));
} else {
    montoFinal = totalCuenta;
}

montoFinal += montoFinal * (porcentajeIVA / 100);

console.log("El monto final con el descuento aplicado más el IVA es: $" + montoFinal.toFixed(2));
