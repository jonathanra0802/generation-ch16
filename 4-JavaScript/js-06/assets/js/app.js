/* console.log(document.URL); */
//getElementById()
titulo.style.color="red";

console.log(document.getElementById("parrafo1").textContent);
//El document
const parrafo1 = document.getElementById("parrafo1");

console.log(parrafo1.textContent);

parrafo1.textContent="Hola desde el parrafo 1";

console.log(parrafo1.textContent);
console.log("parrafo1.style");
parrafo1.style.color="yellow";
parrafo1.style.backgroundColor="green"
 //querySelector()
 
 const parrafo2 = document.querySelector(".parrafo");
 parrafo2.style.color="white";
parrafo2.style.backgroundColor="black"
 console.log(parrafo2);



 parrafo2.textContent += "\n Modificando el contenido desde JS";


 //querySelectorAll()

 const parrafos = document.querySelectorAll ("p");
 console.log(parrafos[2]);
 parrafos[2].style.fontSize ="2rem";

 
 //Modifica los atributos de un html 
 const enlace= document.getElementById("enlace");

 enlace.href= "https://www.youtube.com";
 enlace.target = "_blank"
 enlace.textContent= "Enlace a youtube"

 //Remplazar contenido 
 const parrafo4 = document.getElementById("parrafo4");
 console.log(parrafo4.textContent);
 console.log(parrafo4.innerHTML);
 console.log(document.body.innerHTML);//muestra el html que haya en el interior del elemento 
 console.log(parrafo4.outerHTML);//muestra el contenido html inclyendo al elemento
 /* parrafo4.innerHTML ='<a href="http://google.com">enlace</a>';//Reemplaza el contenido del elemento
 parrafo4.outerHTML ='<a href="http://google.com">enlace</a>';// */
 /* parrafo4.innerHTML = '<div class="elemento">Esto es un div</div>'; */
 console.log(parrafo4.classList.contains("elemento"));
 parrafo4.classList.add('elemento');
 const cambiarColor = () => {
    parrafo4.classList.add("elemento");
 }
 cambiarColor();//Se agrega la clase 
 cambiarColor();//se quita la clase
