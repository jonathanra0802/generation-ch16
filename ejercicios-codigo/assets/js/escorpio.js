var max = 10; //NUMERO MAXIMO QUE SE VA A GENERAR
var min = 1; // NUMERO MINIMO QUE SE VA A GENERAR
var numerom = Math.random()*(max-min) + min; // ECUACION QUE GENERA UN NUMERO ENTRE EL NUMERO MAXIMO (MAX) Y EL NUMERO MINIMO QUE ES (MIN)
numerom = parseInt(numerom); // LA FUNCION parseInt RECIBE UN PARAMETRO Y LO CONVIERTE EN UN NUMERO ENTERO, EN ESTE CASO LA VARIABLE numerom GENERA UN NUMERO ENTRE 1 Y 100 QUE VA A SER CONVERTIDO A ENTERO EN CASO DE QUE ESTE SEA FLOTANTE.
console.log("El numero aleatorio es:"+ numerom);
while(true){ //EL WHILE TRUE VA A PERMITIR QUE SE EJECUTE TODO EL CODIGO HASTA QUE EXISTA UN BREAK. EN ESTE CASO EL USUARIO VA A SEGUIR COLOCANDO EL NUMERO HASTA QUE LO ADIVINE.
      var usuario = prompt("COLOCA UN NUMERO PARA ADIVINAR EL NUMERO MAGICO"); // EL USUARIO VA A CLOCAR SU NUMERO Y VA A SER COMPARADO CON EL NUMERO MAGICO.

if(usuario == numerom){ //SI EL NUMERO DEL usuario ES IDENTICO (CONSIDERANDO EL NUMERO Y EL TIPO DE NUMERO QUE EN ESTE CASO ES ENTERO) ENTONCES
  alert("HAS GANADO");//MUESTRA UNA ALERTA
  break;//Y TERMINA EL PROGRAMA
}
else if(usuario == 0){// SI EL NUMERO DEL usuario ES IGUAL A 0 ENTONCES EL PROGRAMA ENTENDERA QUE EL usuario NO QUIERE JUGAR MAS Y TERMINARA EL PROGRAMA
  break; // CON UN BREAK;"
}
else if(usuario < numerom){
  // SI EL USUARIO COLOCA UN NUMERO MENOR QUE EL NUMEROM, ENTONCES EL PROGRAMA LE AVISARA CON UNA ALERTA Y PERMITIRA QUE EL USUARIO VUELVA A COLOCAR EL NUMERO HASTA QUE LO ADIVINE GRACIAS AL WHILE(TRUE)
  alert("EL NUMERO ES MENOR QUE EL NUMERO MAGICO, VUELVE A INTENTARLO" );
}
else if(usuario > numerom){
  
  // SI EL USUARIO COLOCA UN NUMERO MAYOR QUE EL NUMEROM, ENTONCES EL PROGRAMA LE AVISARA CON UNA ALERTA Y PERMITIRA QUE EL USUARIO VUELVA A COLOCAR EL NUMERO HASTA QUE LO ADIVINE GRACIAS AL WHILE(TRUE)
  alert("EL NUMERO ES MAYOR QUE EL NUMERO MAGICO, VUELVE A INTENTARLO");
}

} // AQUI CIERRA EL WHILE
