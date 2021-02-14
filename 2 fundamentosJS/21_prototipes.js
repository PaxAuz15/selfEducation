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


var luis = new Persona('Luis','Auz', 23, 1.75)
// console.log(luis)