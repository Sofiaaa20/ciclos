/*
 Cree un programa que calcula la suma de los primeros n números naturales.
Use ciclo for

*/

let acumulador = 1;
let num = parseInt(prompt("Ing un numero"))

for (let index = 0; index <= num; index++) {
    console.log(index)
    acumulador = acumulador + 1;
    
}
console.log("La suma de tdoos lo snumero naturales es: " + acumulador)