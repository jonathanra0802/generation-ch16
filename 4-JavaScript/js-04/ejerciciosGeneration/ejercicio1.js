/* Abra un editor de texto de su elección y complete los siguientes ejercicios de Javascript.
Ejercicio 1
PASO 1
Hay tres personas esperando el banco. Sus nombres, en orden, son Sofía, David y Juan. Cree una matriz que tenga estos tres nombres en orden.

PASO 2
Se agregan dos personas más al final de la fila: Sara y Augustin. La primera persona en la fila es llamada al cajero. ¿Cómo es la cola?

PASO 3
Resulta que David estaba reservando un lugar para su amiga Renata. Ella aparece y va detrás de él en la fila. Aparece una persona más (Elena) y va hasta el final de la fila. ¿Cómo es la cola? */

//Paso 1
let personas=["Sofia", "Juan", "David"]
console.log("Fila inicial:", personas);

//Paso 2
personas.push("Sara","Augustin");
console.log("Llega Sara y Augustin a la fila: ",personas);
//La primera persona que esta en la fila se llama "Sofia" y es llamada al cajero por lo que se elimina de la fila 
let cajero = personas.shift(); //Mostramos la primera persona que paso al cajero en este caso "Sofia"
console.log("Persona que fue lamada al cajero:", cajero);
console.log("¿Como quedo la cola:", personas);


//Paso 3 
//David mete a su amiga Renata a la fila 
personas.splice(2,0, "Renata");
console.log("David mete a su amiga Renata a la fila y queda despues de el:",personas);
//Llega Elena hasta el final de la fila 
personas.push("Elena");
console.log("LLega Elena al final y se va hasta el final de la fila");
console.log("Como quedo la cola",personas);
