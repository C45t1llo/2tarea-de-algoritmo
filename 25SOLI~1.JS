//5. Solicitar al usuario el precio de venta de un vehículo nuevo y su año de fabricación.
//Si el año de fabricación está entre el 2020 y 2023, aplicar un descuento del 5% sobre
//el precio de venta. mostrar el precio final incluyendo el 15% del IVA
//Algoritmo CalcularPrecioFinal
    //Definir precioVenta, añoFabricacion, precioFinal, porcentajeDescuento, porcentajeIVA Como Real

    //precioVenta <- 25000 // Precio de venta del vehículo
    //añoFabricacion <- 2022 // Año de fabricación del vehículo

    //Si añoFabricacion >= 2020 y añoFabricacion <= 2023 Entonces
     //   porcentajeDescuento <- 5
   // Sino
      //  porcentajeDescuento <- 0
    //Fin Si

    //porcentajeIVA <- 15

  //  precioFinal <- precioVenta - (precioVenta * (porcentajeDescuento / 100))
//    precioFinal <- precioFinal + (precioFinal * (porcentajeIVA / 100))

  //  Escribir "El precio final del vehículo incluyendo el 15% de IVA es: $" + precioFinal
//Fin Algoritmo
const precioVenta = 25000; // Precio de venta del vehículo
const añoFabricacion = 2022; // Año de fabricación del vehículo

let porcentajeDescuento, porcentajeIVA;

if (añoFabricacion >= 2020 && añoFabricacion <= 2023) {
    porcentajeDescuento = 5;
} else {
    porcentajeDescuento = 0;
}

porcentajeIVA = 15;

let precioFinal = precioVenta - (precioVenta * (porcentajeDescuento / 100));
precioFinal += precioFinal * (porcentajeIVA / 100);

console.log("El precio final del vehículo incluyendo el 15% de IVA es: $" + precioFinal.toFixed(2));
