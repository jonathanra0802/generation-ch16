//Variable que simula los datos pedidos 
const saludo = "Hola mundo";
const datos = [
    {
        nombre: "Jonathan",
        Apellido: "Ramirez"
    },
    {
        nombre: "Jonathan",
        Apellido: "Ramirez"
    },
    {
        nombre: "Jonathan",
        Apellido: "Ramirez"
    }
]

function obtenerDatos(){

    /* //resolve == regresa el resultado exitoso
reject == lo que te hizo tu ex */

    return new Promise( (resolve, reject)=> {
        setTimeout( () => {
            if (true) {
                resolve (datos);
            } else{
                reject("Nunca te quiso")
            }
        },2000) 
    }) 


    
}
obtenerDatos().then( () =>{
    console.log(datos);
}).catch( (error) =>{
    console.log("Existe un error en la peticion");
    console.log(error);
})

//Forma #2 - funciones asincronos- await async

async function funcionAsincrona () {

    try{
        const datos = await obtenerDatos()
        console.log(datos);
        
    }catch(error){
        console.log(error);
    }

}
funcionAsincrona()