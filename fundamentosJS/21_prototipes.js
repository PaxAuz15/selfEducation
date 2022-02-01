function Persona(nombre, apellido, edad, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.altura = altura
}

const esAlto = ({altura}) => altura > 1.8
const esBajo = ({altura}) => altura <= 1.8

Persona.prototype.avisarSiEsAltoBajo = function(){
    if (esAlto(this)){
        console.log(`${this.nombre} es alto`)
    } else if(esBajo(this)){
        console.log(`${this.nombre} es bajo`)
    }
}

Persona.prototype.saludar = function(){
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`)
}

// Persona.prototype.saludar = () =>{
//     console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`)
// }
//FIXME: this significa aqui window y no hace referencia al constructor Persona

var luis = new Persona('Luis','Auz', 23, 1.75)

//FIXME: No usar this, de manera simple, en arrow functions