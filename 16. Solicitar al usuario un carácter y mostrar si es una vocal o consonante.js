//16. Solicitar al usuario un carácter y mostrar si es una vocal o consonante. 
//Algoritmo VerificarCaracter
    //Definir caracter Como Carácter

    //caracter <- 'a'  // Asignamos un valor al carácter

    //Si caracter = 'a' o caracter = 'e' o caracter = 'i' o caracter = 'o' o caracter = 'u' Entonces
      //  Escribir "El carácter es una vocal."
    //Sino
    //    Escribir "El carácter es una consonante."
  //  Fin Si
//Fin Algoritmo
const caracter = 'a'; // Puedes cambiar este carácter según necesites para probar diferentes casos

// Verificar si el carácter es una vocal o consonante
if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
    console.log("El carácter es una vocal.");
} else {
    console.log("El carácter es una consonante.");
}
