function miFuncion(a, b) {
    return(a + b);
}

//A esto se le conoce como instancia
let resultado = miFuncion(3, 6);
console.log("El resultado es:" + resultado);

//Funtion Expresion o anonima

//Funcion Suma
 let suma = function (a, b) {
    return(a + b)
};
resultado0 = suma (3, 2);

let caracteres0 = "La suma es: "
console.log(caracteres0+resultado0);

//Funcion resta 
let res = function (a, b) {
    return(a - b)
};
resultado1 = res (3, 2);

let caracteres1 = "La resta es: "
console.log(caracteres1+resultado1);

//Funcion multiplicacion 
let mul = function (a, b) {
    return(a * b)
};
resultado2 = mul (3, 2);

let caracteres2 = "La mutiplicacion es: "
console.log(caracteres2+resultado2);

//Funcion division
let div = function (a, b) {
    return(a / b)
};
resultado3 = div (3, 2);

let caracteres3 = "La division es: "
console.log(caracteres3+resultado3);

/* Self invoking */
(function (a,b){
    console.log("El resultado de self invoking es: "+ (a+b));
}
)(4,3)