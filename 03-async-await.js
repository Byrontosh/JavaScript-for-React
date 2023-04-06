"use strict";

const conexionBDDExterna = (datosConexion)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datosConexion ? resolve("Conexión satisfactoria") : reject("Conexión rechazada")
        },3000)
    })
}

const obtenerProductos = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');




async function conexion(){
    try {
        console.log(await conexionBDDExterna(true))
    } catch (error) {
        console.log(error)
    }
}


async function conectarAPI(){
    try {
        const peticion = await obtenerProductos
        const respuesta = await peticion.json()
        console.log(respuesta[0].name)
    } catch (error) {
        console.log(error)
    }
}

conexion()
conectarAPI()