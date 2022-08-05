//Expresiones regulares 
/* A las expresiones regulares tambien se les considera como objetos */
//Utilizan una expresion literal de la expresion regular, consistente en un patron encerrado entre diagonales
//ejemplo ______ var re = /ab+c/;

//¿Como se implementa?
//let texto = "Hoy parece que va a salir el sol";
//let texto01 ="la espero en el aeropuerto de LA"
//let buscar= /sol/;
//console.log(buscar.test(texto));

let texto01= "Te marqué anoche"
let buscar=/[eo]/;
console.log(buscar.test(texto01));
