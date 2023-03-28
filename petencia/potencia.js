/*
 Escriba un algoritmo que calcule la potencia de a b
potencial = a * a * a * ... * a (b veces) USE MULTIPLICACIONES. NO USE POTENCIACIÓN. USE CICLOS
*/


let contador = 0;
let operacion = 0;
let potencia = parseFloat(prompt("ing la el numero para la potencia"))
let veces = parseFloat(prompt("ing cuantas veces"))

while (contador <= veces ) {
    operacion = potencia * veces
    contador++
}

console.log("la potencia de "+potencia+" a "+veces+ " veces es de: ", operacion);