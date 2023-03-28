/*Cree un programa que calcule el promedio de 10 números. Use ciclo for*/

let num = 0;
let contador = 0;

for (let index = 1; num <= 10; index++) {
      num = parseFloat(prompt("ing un num"))
    contador = contador + num;
    
}
console.log("El promedio de los numeros es: " + contador / 10);
