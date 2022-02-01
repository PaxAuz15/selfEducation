const soyAlto = ({altura}) => altura >1.8
const soyBajo = ({altura}) => altura <=1.8

class Persona{
    constructor(nombre, apellido, edad, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.altura = altura
    }
    
    saludar(funcionParaResponder){
        var {nombre, apellido} = this
        console.log(`Hola, mi nombre es ${nombre} ${apellido}`)

        if(funcionParaResponder){
            funcionParaResponder(nombre, apellido, false)
        }
    }

    mensajeAltoBajo(){
        var {nombre} = this
        if(soyAlto(this)){
            console.log(`${nombre} es alto`)
        }
        if(soyBajo(this)){
            console.log(`${nombre} es bajo`)
        }
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, edad, altura,lenguaje){
        super(nombre,apellido,edad,altura)
        this.lenguaje = lenguaje
    }

    saludar(funcionParaResponder){
        var {nombre, apellido,lenguaje} = this
        console.log(`Hola, mi nombre es ${nombre} ${apellido}`)

        if(funcionParaResponder){
            funcionParaResponder(nombre,apellido,true,lenguaje)
        }
    }
}

function responderSaludo(nombre, apellido, esDev,lenguaje) {
    console.log(`Hola, ${nombre} ${apellido}. Espero te encuentres bien.`)
    if(esDev){
        console.log(`Veo que eres desarrollador en ${lenguaje}`)
    }
}

var luis = new Desarrollador('Luis','Auz',23,1.72,'JS')
var brangy = new Desarrollador('Brangy', 'Castro', 24, 1.81, 'JS')
var gabriel = new Persona('Gabriel', 'Auz', 18, 1.65)

luis.saludar(responderSaludo)