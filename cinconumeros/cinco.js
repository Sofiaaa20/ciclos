

let contador = 1;
let suma = 0;

//se repite 5 veces el prompt para ingresar el numero 
while (contador <= 5) {
    let numero = parseFloat(prompt("ingrse el numero"))
    contador++
    //este es para acumular un proceso qeu se debe hacer y poder acumular.
    suma = suma + numero;
}

console.log("La suma es :"+suma)