

let obj_persona={
    nombre:"Jonathan",
    apellido: "Ramirez",
    edad: 24, 
    correo: "ejemplo_correo@gmail.com", 
  /*   nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    } */
    //get es un elemento que se puede retornar
    idioma: "eS",
    get leng(){
        return this.idioma.toUpperCase();
    },
    set leng2(lang){
         this.idioma=lang.toLowerCase();
    }

}
console.log(obj_persona.leng);
/* obj_persona.leng='ES'; */
console.log(obj_persona.lang);
/* obj_persona.tel ="1234656788"
console.log(obj_persona);
console.log(obj_persona.nombre);
console.log(obj_persona.nombreCompleto());

let obj_personaNueva= new Object();
obj_personaNueva.nombre="Alejandro"
obj_personaNueva.apellido="Fachita"
obj_personaNueva.edad=28
obj_personaNueva.correo="correodemicompaale_nuevo@gmail.com"

console.log(obj_persona);
console.log(obj_personaNueva);

//For in
for (varPropiedad in obj_persona) {
      console.log(obj_persona[varPropiedad]);
}
let obj_personaString = JSON.stringify(obj_persona);
console.log(obj_personaString); */