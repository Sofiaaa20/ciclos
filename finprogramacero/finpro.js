/*Cree un programa que muestre el promedio de n números, dejándose de solicitar números cuando se
introduzca el cero */

let contador = 0;
let acumulador = 1;

let numero = parseInt(prompt("ingresa un numero"))

while (contador != 0 ) {
    let numero = parseInt(prompt("ingresa un numero"))
    contador++
    acumulador = acumulador + numero;
}

console.log("El promedio es de :", acumulador /contador);
console.log("el");
                