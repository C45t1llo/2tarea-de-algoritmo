//Pide al usuario el precio total de una compra en una tienda en línea y el cupón de
//descuento a aplicar en porcentaje. Si el precio total de la compra supera los $10,
//aplica el descuento, de lo contrario, no aplica ningún descuento. Calcula y muestra el
//monto final con el descuento con el IVA del 15%
//Algoritmo CalcularMontoFinal
    //Definir precioCompra, porcentajeDescuento, montoFinal, porcentajeIVA Como Real

    //precioCompra <- 15 // Precio total de la compra
    //porcentajeDescuento <- 10 // Porcentaje de descuento a aplicar
    //porcentajeIVA <- 15 // Porcentaje del IVA

    //Si precioCompra > 10 Entonces
      //  montoFinal <- precioCompra - (precioCompra * (porcentajeDescuento / 100))
    //Sino
      //  montoFinal <- precioCompra
    //Fin Si

    //montoFinal <- montoFinal + (montoFinal * (porcentajeIVA / 100))

  //  Escribir "El monto final con el descuento y el IVA es: $" + montoFinal
//Fin Algoritmo
const precioCompra = 15; // Precio total de la compra
const porcentajeDescuento = 10; // Porcentaje de descuento a aplicar
const porcentajeIVA = 15; // Porcentaje del IVA

let montoFinal;

if (precioCompra > 10) {
    montoFinal = precioCompra - (precioCompra * (porcentajeDescuento / 100));
} else {
    montoFinal = precioCompra;
}

montoFinal += montoFinal * (porcentajeIVA / 100);

console.log("El monto final con el descuento y el IVA es: $" + montoFinal.toFixed(2));
