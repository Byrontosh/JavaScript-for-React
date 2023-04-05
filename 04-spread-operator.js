'use strict';
const user = {
    name:"Byron",
    lastName:"Loarte",
    age:34
}

const extraInformation = {
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
    sendNotification: function (){
        return `send notification to ${this.Friends[3]}`
    }
}

const allInformation = {...user,...extraInformation}
console.log(allInformation)