//Arreglos 
//Es una coleccion de elementos
//Cada elemento ocupa una oposicion 
//Esa pisicion se conoce como indice y comienza a partir de 0

let arr =[1,2,3,4];
console.log(arr);
//Las propiedades describen 
//metodos - acciones que se puedan realizar
console.log(arr[2]);
arr[4]=190;
console.log(arr);

//metodos de arreglos 
const arreglo=["Adios"];
arreglo.push(2);
arreglo.push(true);

let num=500; 
arreglo.push(num);
console.log(arreglo);

/* Unshift agrega elementos al inicio del arreglo  */
arreglo.unshift("A");
arreglo.unshift("B");
console.log(arreglo);

console.log(typeof(arreglo[4]));
//Metodos para quitar elementos
/* pop */
//Quita un elemento del final del arreglo
let dato1 =arreglo.pop();
console.log(dato1);
console.log(arreglo);

//shift()
//Quita el elemento inicial del arreglo
let dato2 = arreglo.shift();
console.log(dato2);
console.log(arreglo);

//splice ()
//Quita una parte de cualquier posicion de nuestro arreglo 
arreglo.splice(1, 1);   //El primero es elemento que quiero quitar, el segundo numero es la cantidad de elementos que quiero quitar

arreglo.splice(1, 1, "parangaracutimicuaro",921381278321);//si el segundo numero es un cero agrega el elemento sin dañar a los demas elementos si se usa un 1 sustituye el elemento de esa posicion, recordar que empieza el arreglo desde 0,1,2,3 

//Metodos que no modifican el arreglo original 
console.log(arreglo);


//Slice()     - corta partes de un arreglo
//Nuevo metodo 
let dato3 =arreglo.slice(0,2);
//Slice (Posicion apartir de la cual va a cortar, )
console.log(dato3);
console.log(arreglo);

//slice() devuelve un nuevo array con los valores cortados