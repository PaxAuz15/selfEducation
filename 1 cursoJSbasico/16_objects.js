var identidad = {
    nombres: "Luis Antonio",
    apellidos: "Auz Garcia",
    dni: "1315490969",
    edad: 22,
    detalleIdentidad: function(){
        console.log(`Identidad ${this.nombres} ${this.apellidos} ${this.dni}`)
        // En este contexto, $this hace referencia al objeto
    }
}
//traer datos especificos de un objeto
identidad.nombres 
identidad.apellidos
identidad.dni
identidad.edad
identidad.detalleIdentidad()