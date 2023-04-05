'use strict';

const user = {
    name:"Byron",
    lastName:"Loarte",
    age:34,
    address:{
        city:"Quito",
        telephone:"0995644186",
        street:"Quitumbe Ñan"
    },
    Friends:['Peter','Mike','Camila','Joe'],
    state:true,
    sendMail (){
        return `send mail to ${this.Friends[0]}`
    },
    sendNotification: ()=>{
        return `send notification to ${this.Friends[3]}`
    }
}

console.log("Obtener las claves:",Object.keys(user))
console.log("Obtener los valores:",Object.values(user))
console.log("Obtener las claves y valores en un array:",Object.entries(user))