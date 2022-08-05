/* Ejercicio 3.1
– Imprimir repetidamente el valor de la variable xValue, disminuyéndolo en 0,5 cada vez,
siempre que xValue siga siendo positivo. */

//Parte 1
console.log("\nDecremento en 0.5")
let xValue = 5;
while (xValue >= 0) {
    console.log(xValue);
    xValue = xValue - 0.5;
}
