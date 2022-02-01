function heredaDe(hijo,padre){
    var fn = function(){}
    fn.prototype = padre.prototype
    hijo.prototype = new fn
    hijo.prototype.constructor = hijo
}

function Persona(nombre, apellido, altura){
    this.nombre = nombre,
    this.apellido = apellido,
    this.altura = altura
}

const soyAlto = persona => persona.altura > 1.8
const soyBajo = persona => persona.altura <= 1.8

Persona.prototype.quieroSaberSiSoyAltoBajo = function(){
    if(soyAlto(this)){
        console.log(`${this.nombre} es alto.`)
    }
    if(soyBajo(this)){
        console.log(`${this.nombre} es bajo.`)
    }
}

Persona.prototype.saludar = function(){
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`)
}

function Desarrollador(nombre, apellido, lenguaje, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.lenguaje = lenguaje
    this.altura = altura
}

//TODO: Se debe enviar la herencia prototipal antes de los prototipos propios del hijo
heredaDe(Desarrollador, Persona) 

Desarrollador.prototype.saludar = function(){
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y soy un desarrollador/a`)
}



var luis = new Desarrollador("Luis", "Auz", "JS", 1.95)

luis.saludar()
luis.quieroSaberSiSoyAltoBajo()