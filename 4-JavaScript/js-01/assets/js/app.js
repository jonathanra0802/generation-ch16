"use strict";
//Javascrip de forma estricta

// tipos de variables
/* let a= 20; // local
const b = 0; // constante y local
var c; // global */

/* const PI=3.1416; */
/* Scope es el espacio en el que vive la variable */

/* if(true){
    let d = 15;
} */

// var d = "hola";

/* d = "hola";

console.log(d); */
// string

/* let cadena = "Hola Mundo!" */

//Number
/* let numero = 5;
let numero1 = 5.89;
let numero2 = -5.89; */

//Dato tipo booleano
/* let booleano =true;
let booleano1 =false; */

//undefined
/* let variable;  */

//null
/* let vacio = null; */

//NaN - Not a number 
//no es un numero 
//Trata de realizar la operacion aritmetica con algun dato que no es numero

/* plantillas literales
template strrings
literal strings
interpolacion
 */
/* console.log(`Esto es una cadena ${5+4}`);
console.log("Esta es una cadena normal ${5+4}");

let nombre = 'Jonathan'
console.log("Mi nombre es " + nombre);
console.log(`Yo me llamo ${nombre}`); */

//arreglos
/* let arr = [1, "A", null, undefined,[true,false]];

//notacion de corchetes 
console.log(arr[4][0]);

let arr2 = new Array("B", 2); */
//console.log(arr2);

/* Objetos */
// clave / valor

const persona = {
    nombre: 'Jonathan', 
    edad: 24,
    hobbies:[
        "Leer",
        "Ver Shrek 1 y 2",
        "Comer"
    ],
    auto: {
        marca: "VW",
        modelo: "Pointer",
        year: 2000,
    },
    saludar: function(){
        console.log("Hola");
    }
};
//Notacion con punto
console.log(`Mi hobbie es ${persona.hobbies[1]}`);

console.log(`La marca de mi carro es es ${persona.auto.marca}`);
