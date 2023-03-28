/*
Cree un programa que calcule la suma de los cuadrados de los números entre 1 y n.
 */

let contador = 1 ;
let cuadrado = parseFloat(prompt("Ing el numero"))
let acumuladora = 0;

while (contador <= cuadrado) {
    acumuladora = acumuladora + contador **2;
    contador++
}

console.log("La suma de los cuadrados es de: ",acumuladora)