//El banco POO ha decidido aumentar el límite de crédito de las tarjetas de crédito de
//sus clientes, para esto considera que:
//Si su cliente tiene tarjeta tipo 1, el aumento será del $100 .
//Si tiene tipo 2 el aumento será del $200
//Si tiene tipo 3, el aumento será del $300
//Para cualquier otro tipo será del 500
//Se pide realizar un algoritmo que ayude al banco a determinar el nuevo límite de
//crédito que tendrá una persona en su tarjeta considerando que después del aumento
//se tendrá que subir 10% adicionales a todas las tarjetas
//Algoritmo CalcularNuevoLimite
    // Definir variables
    //tipoTarjeta, limiteActual, aumento, nuevoLimite, aumentoAdicional: Entero

    // Solicitar al usuario que ingrese el tipo de tarjeta y el límite actual
    //Escribir "Ingrese el tipo de tarjeta del cliente (1, 2, 3 u otro):"
    //Leer tipoTarjeta
    //Escribir "Ingrese el límite de crédito actual del cliente:"
    //Leer limiteActual

    // Determinar el aumento basado en el tipo de tarjeta
    //Segun tipoTarjeta Hacer
        //caso 1:
          //  aumento <- 100
        //caso 2:
          //  aumento <- 200
        //caso 3:
          //  aumento <- 300
        //caso contrario:
      //      aumento <- 500
    //Fin Segun

    // Calcular el nuevo límite con el aumento específico
    //nuevoLimite <- limiteActual + aumento

    // Calcular el aumento adicional del 10%
    //aumentoAdicional <- nuevoLimite * 0.1

    // Calcular el nuevo límite después del aumento adicional
    //nuevoLimite <- nuevoLimite + aumentoAdicional

    // Mostrar el nuevo límite de crédito
  //  Escribir "El nuevo límite de crédito para el cliente será:", nuevoLimite
//Fin Algoritmo

function calcularNuevoLimite(tipoTarjeta, limiteActual) {
    let aumento = 0;

    switch (tipoTarjeta) {
        case 1:
            aumento = 100;
            break;
        case 2:
            aumento = 200;
            break;
        case 3:
            aumento = 300;
            break;
        default:
            aumento = 500;
            break;
    }

    let nuevoLimite = limiteActual + aumento;

    let aumentoAdicional = nuevoLimite * 0.1;

    nuevoLimite += aumentoAdicional;

    return nuevoLimite;
}
let tipoTarjeta = 2; 
let limiteActual = 3000; 

let nuevoLimite = calcularNuevoLimite(tipoTarjeta, limiteActual);
console.log(`El nuevo límite de crédito para el cliente será: $${nuevoLimite}`);
