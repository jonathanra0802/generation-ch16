/* const palindromo =(palabra) => {
    let palabraInvertida= palabra.split("").reverse().join("");
    if( palabra === palabraInvertida ){
        return "Oiga mi loco esto es un palindromo como chingaos no"
    }else{
        return "Mi loco esto no es un palindromo"
    }
} */

//operador ternario-operador elvis
const palindromo =(palabra) => {

    if(typeof palabra === 'number'){
        return 'No es una palabra'
    }

    let palabraInvertida=palabra.split("").reverse().join("");

    return palabra === palabraInvertida ? 'Es un palindromo' : 'No es un palindromo';
   
}

//(condicion) ? verdadera : falsa 
//(condicion) ? if  :   else 
//console.log(palindromo("oso"));
module.exports=palindromo;