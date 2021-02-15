
const soyAlto = persona => persona.altura > 1.8
const soyBajo = persona => persona.altura <= 1.8

class Persona {
    constructor(nombre, apellido, edad, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad 
        this.altura = altura
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`)
    }

    mensajeAltoBajo(){
        if(soyAlto(this)){
            console.log(`${this.nombre} es alto`)
        }
        if(soyBajo(this)){
            console.log(`${this.nombre} es bajo`)
        }
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, edad, altura,lenguaje){
        super(nombre,apellido,edad,altura)
        this.lenguaje = lenguaje
    }
    
    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y soy desarrollador/a en ${this.lenguaje}`)
    }
}

var luis = new Desarrollador("Luis","Auz",23,1.75,"JS")
luis.saludar()
luis.mensajeAltoBajo()