/* Ejercicio 3.4
- Escriba un método con un bucle while que calcule la suma de los primeros n enteros positivos:
suma = 1 + 2 + 3 + … + norte
Ejemplos:
n = 5 suma = 15
n = 19 suma = 190 */

let suma = 0;
let num = 19;
console.log("n = " + num);

while (num >= 0) {
    suma = suma + num;
    num--;
}
console.log("suma = " + suma);