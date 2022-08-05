/* //sort ()
//Nos permite ordenas los elementos de un arreglo 

const arr = ["X", "A", "H", "a", "W", "b"];
arr.sort();
console.log(arr);

const arr2 = ["Hola", "adiós", "bienvenido", "Calle"];
arr2,sort();
console.log(arr2);

//funcion declarada 
//hoisting
//Es un proceso de reacomodo autimatico del codigo 
function sumar(a,b) {
    return a+b;
}
let a=2;
console.log(a);

//funcion expresada
const multiplicar =function (a,b) {
    return a*b
    
}
console.log(multiplicar (3,5));

//Funciones flecha
const dividir = (a,b) =>{
    return a/b;
}
console.log(10, 2);
 */
const arr3 = [5,1231,567,1,80];
arr3.sort((a,b)=>b-a); //ordena numeros de forma mayor a menor
console.log(arr3);
arr3.sort((a,b)=>a-b); //ordena numeros de forma menor a mayor
console.log(arr3);

//forEach()
//un ciclo que recorre en automatico todo nuestro arreglo 
const arrNumeros=[1,4,6,8,10,20,30];
/* for(let i=0; i<arrNumeros.length; i++){
    arrNumeros[i]=arrNumeros[i]*2
} */
arrNumeros.forEach((elemento,index,arr) => {
    console.log(elemento*=2);
}
);

//El forEach(elemento, indice arreglo completo)

