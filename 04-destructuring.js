'use strict';

const dataNewUser= ["Byron","Loarte",34,true,{ciudad:"quito"},["frontend","backend"]]

const [name,lastname,age,active,address,skills] = dataNewUser

console.log(name)
console.log(lastname)
console.log(age)
console.log(active)
console.log(address)
console.log(skills)

// Saltar el valor en un arreglo
const [tomate, , zanahoria] = ['🍅', '🍄', '🥕']
console.log(tomate)
console.log(zanahoria)

// Desestructurando un arreglo anidado
const frutas = ['🍈', '🥕', '🍌', '🍉', ['🍅', '🍄', '🍍']]
const market = frutas[4]
const pineapple = market[2]
console.log(pineapple);