//Pide al usuario el precio de un artículo y el porcentaje de impuesto de ventas aplicado
//en su región. Si el precio del artículo supera los $200, aplica el impuesto de ventas,
//de lo contrario, no se aplica impuesto. Calcula y muestra el precio final luego de
//aplicar el impuesto.
//Algoritmo CalcularPrecioFinal
    //Definir precioArticulo, porcentajeImpuesto, precioFinal Como Real

    //precioArticulo <- 250 // Precio del artículo
    //porcentajeImpuesto <- 8 // Porcentaje de impuesto de ventas

    //Si precioArticulo > 200 Entonces
      //  precioFinal <- precioArticulo + (precioArticulo * (porcentajeImpuesto / 100))
    //Sino
      //  precioFinal <- precioArticulo
    //Fin Si

  //  Escribir "El precio final del artículo es: $" + precioFinal
//Fin Algoritmo
const precioArticulo = 250; // Precio del artículo
const porcentajeImpuesto = 8; // Porcentaje de impuesto de ventas

let precioFinal;

if (precioArticulo > 200) {
    precioFinal = precioArticulo + (precioArticulo * (porcentajeImpuesto / 100));
} else {
    precioFinal = precioArticulo;
}

console.log("El precio final del artículo es: $" + precioFinal.toFixed(2));
