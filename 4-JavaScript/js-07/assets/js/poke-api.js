/* URL o consumir */
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/"




/* Elementos del DOM */
const imgPokemon = document.getElementById("img-pokemon")
console.log(imgPokemon);

const idPokemon = document.getElementById("id-pokemon")
console.log(idPokemon);

const nombrePokemon = document.getElementById("nombre-pokemon")
console.log(nombrePokemon);

const listaHabilidades = document.getElementById("lista-habilidades")
console.log(listaHabilidades);

const listaTipos=document.getElementById("lista-tipos")
console.log(listaTipos);
const formulario = document.getElementById("buscador-pokemon")
console.log(formulario);

//eventos
formulario.addEventListener("submit",(e) =>{
    
    e.preventDefault()
    console.log("Boton");

    const inputPokemon= document.getElementById("busqueda-pokemon")
    console.log(inputPokemon.value);

    const nuevaBusqueda= urlPokemon+ inputPokemon.value
    console.log(nuevaBusqueda);
    obtenerPokemon(nuevaBusqueda);

})



/* Funciones */


async function obtenerPokemon(url){
    try {
        const respuesta = await fetch(url)
    const datos = await respuesta.json()
 
    const pokemon = {
        nombre: datos.forms[0].name,
        habilidad: datos.abilities,
        id: datos.id,
        tipo: datos.types,
        imagen: datos.sprites.other["official-artwork"].front_default,
    }
    //para ponerle nombre,imagen y id
    imgPokemon.src = pokemon.imagen;
    idPokemon.textContent = `ID: ${pokemon.id}`;
    nombrePokemon.textContent = pokemon.nombre;

    //habilidades
    console.log(pokemon.habilidad.lenth);
    
    let template= ``

    for(let i=0; i < pokemon.habilidad.length; i++){

        const nombreHabilidad = pokemon.habilidad[i].ability.name

        console.log(nombreHabilidad);

        template += `<li class="list-group-item">${nombreHabilidad}</li>`
    }

    listaHabilidades.innerHTML = template;

    //Tipos
    console.log(listaTipos);

    let templateTipos =` `
    
    pokemon.tipo.forEach((tipo) =>{
        
        const nombreTipo = tipo.type.name;
        console.log(nombreTipo);

        templateTipos += `<li class="list-group-item">${nombreTipo}</li>`

    })
    
    listaTipos.innerHTML = templateTipos;
    } catch (error) {
        alert("No existe el pokemon solicitado")
    }
    /* const respuesta = await fetch(url)
    const datos = await respuesta.json()
 
    const pokemon = {
        nombre: datos.forms[0].name,
        habilidad: datos.abilities,
        id: datos.id,
        tipo: datos.types,
        imagen: datos.sprites.other["official-artwork"].front_default,
    }
    //para ponerle nombre,imagen y id
    imgPokemon.src = pokemon.imagen;
    idPokemon.textContent = `ID: ${pokemon.id}`;
    nombrePokemon.textContent = pokemon.nombre;

    //habilidades
    console.log(pokemon.habilidad.lenth);
    
    let template= ``

    for(let i=0; i < pokemon.habilidad.length; i++){

        const nombreHabilidad = pokemon.habilidad[i].ability.name

        console.log(nombreHabilidad);

        template += `<li class="list-group-item">${nombreHabilidad}</li>`
    }

    listaHabilidades.innerHTML = template;

    //Tipos
    console.log(listaTipos);

    let templateTipos =` `
    
    pokemon.tipo.forEach((tipo) =>{
        
        const nombreTipo = tipo.type.name;
        console.log(nombreTipo);

        templateTipos += `<li class="list-group-item">${nombreTipo}</li>`

    })
    
    listaTipos.innerHTML = templateTipos; */
}

/* obtenerPokemon(urlPokemon) */