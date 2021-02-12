var luis = {
    nombre: "Luis",
    edad: 22
}

var gabriel = {
    nombre: "Gabriel",
    edad: 18
}

const MAYORIA_DE_EDAD = 18

/*
function mayoriaDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}
*/

// Esta es una funcion anonima
const mayoriaDeEdad = function(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}

//Arrow functions
const mayoriaDeEdad = (persona) => {
    return persona.edad >= MAYORIA_DE_EDAD
}

const mayoriaDeEdad = persona => {  //Si solo se tiene un parametro en la funcion, se puede obviar los parentesis
    return persona.edad >= MAYORIA_DE_EDAD
}

const mayoriaDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD

function imprimirMSGmayorDeEdad(persona) {
    if (mayoriaDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad. Tiene ${edad} anios`)
    }else{
    console.log(`${persona.nombre} no es mayor de edad. Tiene tan solo ${edad} anios`)

    }
}