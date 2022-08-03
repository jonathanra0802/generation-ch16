/* Control de flujo */
/*    Condicionales    */

let condicion = "C"

if (condicion === "A") {
    /* Codigo que hace si se cumple la condicion A*/
    console.log("Entro en la condicion A");
} else if (condicion === "B") {
    /* Codigo que hace si se cumple la condicion B*/
    console.log("Entro en la condicion B");
} else if (condicion === "C") {
    /* Codigo que hace si se cumple la condicion C*/
    console.log("Entro en la condicion C");
} else{
    /* Codigo que se hace si no se cumple ninguna de las condicionesz anteriores */
    /* Condicion por defecto */
    console.log("No entro a ninguna de las condiciones anteriores");
}

function dividir (a,b){
    if(b===0){
        console.log("No se puede realizar la operacion");
    }
    else{
        console.log(a/b);
    }
}

/* Funcion de switch  */

let nuevaCondicion =1;

switch (nuevaCondicion) {
    case "Hola":
    console.log("Buenos dias");    
    console.log("Espero que te encuentres bien");
    break;
    
    case "Adios":
    console.log("Nos vemos");
    break;

    case "Saludo":
    console.log("Te mando un saludo");
    break;

    default:
        console.log("No te entendi ni maiz paloma");
        break;
}

//Calculadora
switch(elegir){

    case "sumar":
        console.log("Vamos a sumar");
        break

    case "restar":
        console.log("Vamos a restar");
        break

    case "dividir":
        console.log("Vamos a dividir");
        break

    case "multiplicar":
        console.log("Vamos a multiplicar");
        break

    default:
        console.log("No entiendo");
}

//Calculadora con If
if(elegir === "sumar"){

    console.log("Vamos a sumar");

}else if(elegir == "restar"){

    console.log("Vamos a restar");

}else if(elegir == "dividir"){

    console.log("Vamos a dividir");

}else if(elegir == "multiplicar"){

    console.log("Vamos a multiplicar");

} else {

    console.log("No entiendo");

}

