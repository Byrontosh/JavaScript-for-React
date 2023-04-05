// 'use strict';

// const profileUser= ["Byron","Loarte",34,true,{ciudad:"quito"}]
// const skills = ["frontend","backend"]
// const nickname ="Byrontosh"

// // Agrega al final del arreglo
// profileUser.push(skills)
// // Agregar al inicio del arreglo
// profileUser.unshift(nickname)
// console.log(profileUser);



// 'use strict';

// const profileUser= ["Byron","Loarte",34,true,{ciudad:"quito"}]

// // Elimina el elemento del final del arreglo
// profileUser.pop(profileUser)
// // Elimina el elemento del inicio del arreglo
// profileUser.shift(profileUser)
// console.log(profileUser);





// const friends = ["Peter","Juan","Luisa","Anahi","Mateus"]

// // método find
// const friendOne = friends.find((e)=>e==="Luisa")
// console.log(friendOne);

// const friendTwo = friends.find((e)=>e==="Luisa123")
// console.log(friendTwo);







// 'use strict';

// const friends = ["Peter","Juan","Luisa","Anahi","Mateus"]

// // método findIndex
// const encontrar = friends.findIndex((f)=>f==="Toshi")
// console.log(encontrar)








// const friends = ["Peter","Juan","Luisa","Anahi","Mateus",'Pablo']

// // método filter
// const newfriendsOne = friends.filter((e)=>e.startsWith('P'))
// const newfriendTwo = friends.filter((e)=>e!='Pablo')
// console.log(newfriendsOne);
// console.log(newfriendTwo);





// const nameFriends = ["Peter","Juan","Luisa","Anahi","Mateus",'Pablo']
// const namePets = ["Puka","Chochitos","Peggy","Tobby","Blanqui",'Coffe']

// // método concat
// const newNames = nameFriends.concat(namePets)
// console.log(newNames);





// 'use strict';

// // Funciona únicamente con arreglos de un solo valor
// const profileUser= ["Byron","Loarte",34,true,{ciudad:"quito"}]

// console.log(profileUser.includes(34))
// console.log(profileUser.includes(['frontend']))









// 'use strict';

// // Funciona para arreglos de un solo valor y arreglo de objetos
// const friends = ["Peter","Juan","Luisa","Anahi","Mateus",'Pablo']
// const users =[
//     {
//         name:"Byron",
//         lastName:"Loarte",
//         age:34
//     },
//     {
//         name:"Billy",
//         lastName:"Strick",
//         age:30
//     }
// ]
// const existe = users.some(u=>u.name==="Byron")
// console.log(existe)
// const verifica = friends.some(f=>f==="Byron")
// console.log(verifica)






// "use strict";

// const carritoCompras = [
//     {   product: "phone",
//         qty: 1,
//         price: 500
//     },
//     {   product: "Screen Protector",
//         qty: 1,
//         price: 10,
//     },
//     {
//         product: "Memory Card",
//         qty: 2,
//         price: 20,
//     }
// ]
// // Todos los elementos deben cumplir la condición
// const result = carritoCompras.every(e=>e.price>=500)
// console.log(result);
// //  Al menos un elemento debe cumplir la condición
// const response = carritoCompras.some(e=>e.price>=500)
// console.log(response);





// 'use strict';

// const profileUser= ["Byron","Loarte",34,true,{ciudad:"quito"}]
// console.log(profileUser.reverse())





// 'use strict';

// const profileUser= ["Byron","Loarte",34,true,{ciudad:"quito"}]
// console.log(profileUser.sort())






// "use strict";

// const estudiantes = [
//     { name: "John", age: 21 },
//     { name: "Oliver", age: 55 },
//     { name: "Michael", age: 55 },
//     { name: "Dwight", age: 19 },
//     { name: "Oscar", age: 21 },
//     { name: "Kevin", age: 55 },
// ];

// const carritoCompras = [
//     {   product: "phone",
//         qty: 1,
//         price: 500
//     },
//     {   product: "Screen Protector",
//         qty: 1,
//         price: 10,
//     },
//     {
//         product: "Memory Card",
//         qty: 2,
//         price: 20,
//     }
// ]


// const resultado = estudiantes.reduce((pre, act) => pre + act.age, 0);
// console.log("Edad de los estudiantes: ",resultado);

// const totalProductos = carritoCompras.reduce((pre,act)=>pre+act.qty,0)
// console.log("Total de productos: ",totalProductos);

// const totalPagar = carritoCompras.reduce((pre,act)=>pre+act.price,0)
// console.log("Total a pagar con IVA: ",totalPagar+(totalPagar*0.12))