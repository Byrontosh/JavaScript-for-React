const friends = ["Peter","Juan","Luisa","Anahi","Mateus"]

// primera forma de iterar sobre los elementos de un arreglo 
for (let i=0 ; i<friends.length ; i++){
    console.log(friends[i]);
}

// segunda forma de iterar sobre los elementos de un arreglo 
friends.forEach((e,i)=>console.log(`${i} - ${e}`))


// tercera forma de iterar sobre los elementos de un arreglo 
const newFriends= friends.map((e)=> `Hola ${e}`)
console.log(friends);
console.log(newFriends);
// En conclusión (map) no altera el arreglo original


const user =[
    {
        name:"Byron",
        lastName:"Loarte",
        age:34
    },
    {
        name:"Billy",
        lastName:"Strick",
        age:30
    }
]

user.forEach(u=>console.log(`${u.name} - ${u.age}`))