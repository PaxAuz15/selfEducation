var luis = {
    nombre: 'Luis',
    edad: 22
}

var gabriel = {
    nombre: 'Gabriel',
    edad: 18
}

var ricky = {
    nombre: 'Ricky',
    edad: 5
}

const MAYORIA_DE_EDAD = 18

function mayoriaDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirMSGmayorDeEdad(persona){
    if(mayoriaDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad. Tiene ${persona.edad} anios`)
    }else{
        console.log(`${persona.nombre} no es mayor de edad. Tiene tan solo ${persona.edad} anios`)
    }
}