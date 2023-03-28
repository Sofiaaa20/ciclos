/*muetre los numeros naturales del 1 a n(donde n es cualquier numero natural)*/

let = contador = 0;
let numero = parseInt(prompt("Ingrese un numero"))
let acumulador = 1;

if (numero >=1) {
    while (contador <= numero ) {
        console.log(contador+1)
        contador++;
        acumulador = acumulador +1;
    }
}
console.log("La suma de la cumulacion es de: ", acumulador);