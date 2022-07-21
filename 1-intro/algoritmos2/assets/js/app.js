
//arreglos tambien conocidos como array 

let num = [];
console.log(num);

/* como se usa un arreglo  */

const arr=[1,2,3,4,5];
//Hace llamado a todos los valores del arreglo
console.log(arr);
//Notacion de corchetes [] 
//Hace llamado a algun valor en especifico del arreglo 
console.log(arr[3]);

//Otra manera de agregar elemntos al arreglo 
arr[5]=700;
console.log(arr);

//length nos permite saber el numero de elementos de nuestro arreglo 

console.log(arr.length);

//metodos del array 
//Son aquellas acciones que puede realizar un objeto o arreglo 
const frutas = ["Manzana", "platano"];
/* console.log(frutas); */

//push ()
//agrega un valor al final del arreglo 

let fruta = "Toronja"
frutas.push("Naranja");
frutas.push(fruta);

console.log(frutas);

//unshift ()
//Agrega elementos al inicio del arreglo 
frutas.unshift("Uva"); 
console.log(frutas);

//Arreglo multidimensional 
const newArr = [1, 45, "Hola", "Adios", true, null, 
[30,31,32],["Azul","Amarillo","Rojo"]];
console.log(newArr[7][2]);