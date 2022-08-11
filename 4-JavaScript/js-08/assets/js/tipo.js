//Tipo predefinido
let tiempo = new Date();
console.log(tiempo);
console.log(Math);

let obj_literal= {
    nombre:"Juan",
    edad:35
}

let obj_contructor =new Object();
obj_contructor.nombre = 'Dora';
obj_contructor.edad = 69;
console.log(obj_literal);
console.log(obj_contructor);

obj_contructor.nombre = 'jonathan';
obj_contructor.edad = 24;
console.log(obj_contructor);

//Tipo cadena 
let cadena = "Esto es una cadena";
let cadena_obj = new String('Esto es otra cadena obj');
console.log(cadena);
console.log(cadena_obj);

//Tipo numerico
let numero = 13;
let numero_obj = new Number(11.11);
console.log(numero);
console.log(numero_obj);


//Tipo de compuesto o unico 
let lista =["2","3", "5", "7"];
let lista_obj= new Array('1','4','6','8','9');
console.log(lista);
console.log(lista_obj);