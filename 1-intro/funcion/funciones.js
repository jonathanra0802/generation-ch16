/* TEMA:Funciones  */


/* function sumar (numero1, numero2){
    console.log("Voy a sumar");
    console.log("El resultado de la suma es: " +(numero1+numero2));

} */
/* sumar(4,5); */

//Ejercicio del sueldo usando function 

/* function calculadoraSueldo (sueldoIngresado, diasTrabajados){
    
    let nombre = prompt("Escribe tu nombre")
    console.log(nombre);
    
    const sueldo = sueldoIngresado;
    const diasSemana = diasTrabajados; 
    const semanaMes = 4;
    
    console.log("Sueldo semanal:" + (sueldo * diasSemana));
    console.log("Sueldo mensual:" + (sueldo * diasSemana * semanaMes));

}

calculadoraSueldo(100,2) */

//Calculadora de porcentajes 

function calcularPorentaje(numeros, porcentaje){
    let resultado = numeros * porcentaje; 
    return resultado;
}
let resultado =calcularPorentaje (100, 0.40)
console.log(resultado);