const palindromo = require('../src/js/palindromo');


describe('pruebas de la funcion palindromo', () =>{
    test('debe regresar "Es un palindromo" si ingresamos ojo',()=>{
        let mensaje ="Es un palindromo";
        let palabra = "ojo";
        
        expect(palindromo(palabra)) .toBe(mensaje)
    })
    test('No debe regresar "Es un palindromo" al ingresar la palabra "Generation"', ()=>{
        let mensaje ="Es un palindromo";
        let palabra = "generation";
        expect(palindromo(palabra)).not.toBe(mensaje)
    })
    test('al ingresar un numero debe regresar el mensaje', ()=>{
        let mensaje="No es una palabra";
        let valor=3;      
        expect(palindromo(valor)).toBe(mensaje)  
    })
})