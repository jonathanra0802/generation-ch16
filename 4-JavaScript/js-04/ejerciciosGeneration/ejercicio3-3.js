/* 
Ejercicio 3.3
- Escriba un método con un bucle while para imprimir del 1 al n entre corchetes.
Por ejemplo, si n = 6 imprime [1] [2] [3] [4] [5] [6] */

console.log("\nNúmeros entre Corchetes:")

let j =1; 
let n = 5;
while (j <= n) {
    console.log("[" + j + "] ");
    j++;
}