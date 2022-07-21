
// conntrol de flujo 

let nombre ="Marina";
let edad= "23";
let nombreIngresado = prompt("Escribe tu nombre");
console.log(nombreIngresado);

//el prompt se usa para mandar una peticion al usuario 

console.log(prompt);

//casteo es la conversion de un dato a otro para esto se usa "parse"

if(nombre === "Jonathan") {
    //scope-el alcance que tiene
    console.log("Eres un");
    console.log("administrador");
}

else if (nombre === "Maria"){
    console.log("Eres una mentora");
}
else if (nombre === "Marina"){
    console.log("Eres la jefa");
}

console.log("Fin del programa");