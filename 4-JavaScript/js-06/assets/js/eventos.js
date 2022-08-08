//manejador de eventos
function saludar(){
    alert("Hola")
}
//addEventListenner
/* const boton =document.getElementById('boton');
console.log(boton);

boton.addEventListener('click', (evento) => {
   console.log(evento.target);
}); */

const formulario= document.getElementById('form')
formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(formulario[0].value);
})