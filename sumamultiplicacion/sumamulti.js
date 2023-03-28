

/*
Crear un programa que muestre la multiplicación de dos cantidades. Use ciclo while.
NO USE LA OPERACIÓN MULTIPLICACIÓN
*/

let acumuladora = 0;
let contador = 1;

let num1 = parseFloat(prompt("ing un num"))
let num2 = parseFloat(prompt("ing un num"))

while (contador <= num1) {
    acumuladora = acumuladora + num2
    contador++
}

console.log("la suma abreviada es: ",acumuladora);