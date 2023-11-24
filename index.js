
// Resumen final de conceptos 




// Tipos de datos primitivos 
let entero = 42
let decimal = 3.14
let texto = "Anita"
let activo = false
let dato = undefined
let valor = null


// Tipos de datos compuestos 
let miArray = [1, 2, 3, 4, 5]
let miObjeto = {
    nombre: "John",
    ciudad: "Quito",
};



// Strings - propiedades, métodos y template strings 
let tipoJuego = "Carreras y Deportes"
console.log(tipoJuego.length)
console.log(tipoJuego.includes("Kart"))
console.log(tipoJuego.split(" "))
console.log(`Tipo de juego ${tipoJuego}`)



// Numbers - orden de presedencia y conversión
console.log(3 + 4 * 5)
let precioJuego = "525.63"
console.log(Number.parseFloat(precioJuego))
console.log(+precioJuego + 10);



// Condicionales - operador ternario
let saldoTarjetaUsuario = 500
let saldoTarjeta = 1000
const respuesta = saldoTarjeta <= saldoTarjetaUsuario ? "Pagar" : "Seguir consumiendo"
console.log(respuesta)

let componente = "Header"
console.log(!componente ? "No pintar nada" : "Mostrar componente")



// Funciones 
    function tomate() {
    console.log("Es una Función Declarada")
}

    const uva = function () {
    console.log("Función Expresada  y Anónnima")
}

    const pera = () => {
    console.log("Función Flecha")
}


// Arreglos 
let puntajes = [1, 2, 3, 4, 5];
const nuevosPuntajes = puntajes.map(p => p*2)
console.log(nuevosPuntajes)
console.log(puntajes)
//propiedades 
console.log(puntajes.length)
// Métodos 
    // push - unshift - pop - shift - slice - filter - includes - reduce


// Desestructuración de un arreglo
const dataNewUser= ["Byron","Loarte",34,true,{ciudad:"quito"},["frontend","backend"]]
const [nickname,lastname,age,active,address,skills] = dataNewUser
console.log(nickname)
console.log(nickname)
console.log(nickname)
console.log(nickname)
console.log(nickname)



// spread operator
const amigos = ["Peter","Juan","Luisa","Anahi"]
const animalesAPI = ["Puka","Chochitos","Peggy"]
const nuevaInfo = [...amigos,...animalesAPI]
console.log(nuevaInfo)



// Objetos
const user = {
    name:"Byron",
    lastName:"Loarte",
    age:35,
    Friends:['Peter','Mike','Camila','Joe'],
    state:true,
    sendMail (){
        return `Enviar correo a - ${this.Friends[0]}`
    }
}

// Agregar una clave-valor
user.image ="t.ly/Rhgs"
// Eliminar una clave
delete user.state
console.log(user.sendMail())

// Desestructuración de un objeto
const infoDog =  {
    name:"Peggy",
    age:3,
}
const {name , age: edad} = infoDog
console.log(name)
console.log(edad)


// spread operator
const infoUsusario =  {
    nickname:"Joe",
    status:"active",
}
const infoCompleta = {...infoDog , ...infoUsusario}
console.log(infoCompleta)

// Métodos 
console.log(Object.keys(infoCompleta))
    // values - entries - freeze


/*
    El spread operator se utiliza para expandir un objeto iterable en 
    múltiples elementos, mientras que el rest operator se utiliza para 
    agrupar múltiples elementos en un objeto iterable. 
*/



// Nombres abreviados de propiedades (claves)
const nombre ="laptop"
const precio = 3000
const nuevoProducto = {
    nombre:nombre,
    precio:precio
}
console.log(nuevoProducto);



// DOM 
// Programación imperativa
// const buscador = document.querySelector('#search-178')
// const button = document.createElement("button")
// button.innerText="Hello React"
// buscador.appendChild(button)
// button.addEventListener('click',()=> alert("Abrir Popup"))

// Programación declarativa
// <button onClick={()=>alert("Abrir Popup")}></button>




// Asincronismo 

// Callbacks 
setTimeout(() => {
    console.log("Operación asíncrona completada");
}, 2000)

// Promesas - Pendiente - Completa - Rechazada
fetch("https://dog.ceo/api/breeds/image/random")
    .then(respuesta => respuesta.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))


// ASYNC - AWAIT
const Frases = async ()=>{
    try {
        const respuesta = await fetch("https://api.breakingbadquotes.xyz/v1/quotes")
        const data = await respuesta.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
Frases()



// API 

// JSON
// https://apidogs
const infoDogs = [
    {
        "name":"Peggy",
        "age":3,
    },
    {
        "name":"Bruno",
        "age":5,
    }
]

// https://apidog/1
const infoDogd =  {
    "name":"Peggy",
    "age":3,
}

// LOCAL STORAGE 
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(respuesta => respuesta.json())
    .then(data => {
            let usuario ={
                name:data.name,
                username:data.username,
                email:data.email
            }
            guardarLocalStorage(usuario)
    })


const guardarLocalStorage = (data)=>{
    localStorage.setItem('user',JSON.stringify(data))
}



// Módulos 

// Common JS

// const { conectarBDD, Models } = require("./database")
// console.log(conectarBDD("tosh","12345"))
// console.log(Models)


// ES module
import { ListarUsarios, RegistrarUsuario } from "./controllers.js"
console.log(RegistrarUsuario())
console.log(ListarUsarios())