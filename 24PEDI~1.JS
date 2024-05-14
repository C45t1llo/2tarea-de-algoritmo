//Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado,
//considerando que la nota mínima de aprobación es 60 puntos. Si la nota es mayor a
//40 y menor a 60 se queda para recuperación caso contario pierde la materia.
//Algoritmo DeterminarResultadoExamen
    //Definir notaExamen Como Entero

    //notaExamen <- 70 // Asigna la nota del examen

    //Si notaExamen >= 60 Entonces
      //  Escribir "Has aprobado el examen."
    //Sino Si notaExamen >= 40 Entonces
      //  Escribir "Tienes que recuperar el examen."
    //Sino
  //      Escribir "Has reprobado el examen."
    //Fin Si
//Fin Algoritmo
const notaExamen = 60; // Asignamos  la nota del examen

if (notaExamen >= 60) {
    console.log("Has aprobado el examen.");
} else if (notaExamen >= 40) {
    console.log("Tienes que recuperar el examen.");
} else {
    console.log("Has reprobado el examen.");
}
