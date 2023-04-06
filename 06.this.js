const persona = {
    nombre: "Byrontosh",
    saludar: function () {
    setTimeout(()=> {
        console.log("Hola, mi nombre es " + this.nombre)
        }, 1000);
    },
};

persona.saludar()
