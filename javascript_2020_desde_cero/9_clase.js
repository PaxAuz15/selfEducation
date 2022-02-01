class Persona{
    constructor(nombre,apellido,edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`);
    }
}