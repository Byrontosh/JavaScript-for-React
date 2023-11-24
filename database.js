

const conectarBDD = (username,password)=>{
    return respuesta = (username==="tosh" && password==="123") ? "Conexión ⭐": "Conexión ❌"
}

const Models = ['Usuario','Producto','Ventas']

module.exports = {
    conectarBDD,
    Models
}