/* //Creacion de un elemento 
const imagen = document.createElement('img');

//modificar los atributos html del elemento 
imagen.src = 'https://placeimg.com/200/200/animals';
imagen.alt = 'imagenes aleatorias de animales';
//Lo insertamos en un elemento padre
document.body.appendChild(imagen);
document.body.insertAdjacentElement("afterbegin", imagen);
document.body.insertAdjacentElement("afterend", imagen);
document.body.insertAdjacentElement("beforebegin", imagen);
document.body.insertAdjacentElement("beforeend", imagen); */

//forma correcta de insertar un elemento 
//1.- Se crea el elemento que contendra la imagen
//2.- seleccionar el elemento padre 
const padreImg =document.getElementById('padreImg');

//3.- Crear el elemento 
const imagen2 = document.createElement("img");

//4.-modificamos los atributos del elemento 
imagen2.src="https://placeimg.com/200/200/nature";
imagen2.alt="Imagen de naturaleza";

//5.- Insertar elemento
padreImg.appendChild(imagen2);

//Utilizar forEach para pintar datos
const frutas = ["Toronja","Manzana", "Mandarina", "Limon", "Granada", "Melon", "Platano", "Guayaba"];
const listaFrutas = document.getElementById('frutas');

//La vieja confiable
/* frutas.forEach((element)=>{
    const li =document.createElement('li')
    li.textContent=element
    listaFrutas.appendChild(li);
}) */

//Otra forma mas chida 
frutas.forEach((el)=>{
listaFrutas.innerHTML +=`<li>${el}</li>` 
});