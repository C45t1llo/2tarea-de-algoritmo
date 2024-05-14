//Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado.
//Calcular y mostrar el precio final luego de aplicar el descuento siempre cuando el
//precio sea mayor $100.
//Algoritmo CalcularPrecioFinal
//Definir precioProducto, porcentajeDescuento, precioFinal Como Real

//precioProducto <- 150 // Ingresa el precio del producto
//porcentajeDescuento <- 20 // Ingresa el porcentaje de descuento aplicado

//Si precioProducto > 100 Entonces
    //precioFinal <- precioProducto - (precioProducto * (porcentajeDescuento / 100))
  //  Escribir "El precio final del producto después de aplicar el descuento es: $" + precioFinal
//Sino
  //  Escribir "El precio del producto es menor o igual a $100. No se aplica descuento."
//Fin Si
//Fin Algoritmo
const precioProducto = 150; // Ingresa el precio del producto
const porcentajeDescuento = 20; // Ingresa el porcentaje de descuento aplicado

if (precioProducto > 100) {
    const precioFinal = precioProducto - (precioProducto * (porcentajeDescuento / 100));
    console.log("El precio final del producto después de aplicar el descuento es: $" + precioFinal);
} else {
    console.log("El precio del producto es menor o igual a $100. No se aplica descuento.");
}
