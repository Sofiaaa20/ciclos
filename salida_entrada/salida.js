/*Cree un programa que pregunte al usuario si desea salir, si o no “S/N”, si el usuario teclea la letra S el
programa se detendrá, de lo contrario continuará ejecutándose.*/

let preguntar;
let contador = 0;

do {
    preguntar = prompt("Ing S/n")
} while (contador != "S" && Contador != "s"){
    console.log("Deseas salir o deseas seguir?")
    contador++
}
   
window.alert("El programa se seguira ejecutando")

