/* Funciones como objetos */
function miFuncion(a=6, b=7){
    let res=0 //propiedad
    res=(a*b)//Acccion o proceso
    return res;
}
console.log( typeof miFuncion);
var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);