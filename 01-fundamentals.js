"use strict";


fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))


const obtenerData = async (nombrePokemon)=>{
        const peticion = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`) 
        const response = await peticion.json()
        console.log(response.name , response.sprites.front_default);
}
obtenerData('pikachu')