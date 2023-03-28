/*Cree un programa que muestre los números impares entre 1 y n. Use ciclo for*/

let contador = 1;
let num = parseInt(prompt("Ing un num"))
    for (let index = 1; index <= num; index++) {
        if (contador % 2 !=0) {
            console.log("los numeros impares son: "+contador)
        }
        contador++
    }
