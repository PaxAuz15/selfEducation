var luis = {
    nombre: "Luis",
    edad: 22
}

var ricky = {
    nombre: "Ricky",
    edad: 5
}

const MAYORIA_DE_EDAD = 18

/* funcion normal
function mayoriaDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}
*/

// Esta es una funcion anonima
// const mayoriaDeEdad = function(persona){
//     return persona.edad >= MAYORIA_DE_EDAD
// }

//Arrow functions
// Junto con la funcion anonima, son casi lo mismo. En arrow functions pasa algo más
// const mayoriaDeEdad = (persona) => {
//     return persona.edad >= MAYORIA_DE_EDAD
// }

//Si solo se tiene un parametro en la funcion, se puede obviar los parentesis
// const mayoriaDeEdad = persona => {  
//     return persona.edad >= MAYORIA_DE_EDAD
// }

//Si solo una funcion retorna algo, se omite las llaves y el return
// const mayoriaDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD 

//Desestructuras más el parámetro
//Si quiero un pasar un objeto que tiene un atributo edad, lo podría poner así!
const mayoriaDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

function imprimirMSGmayorDeEdad(persona) {
    if (mayoriaDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad. Tiene ${persona.edad} anios`)
    }else{
    console.log(`${persona.nombre} no es mayor de edad. Tiene tan solo ${persona.edad} anios`)
    }
}

// const permitirAcceso = (persona) => {
//     if(!mayoriaDeEdad(persona)){
//         console.log("ACCESO DENEGADO")
//     }
// }

const permitirAcceso = persona => {
    if(!mayoriaDeEdad(persona)){
        console.log("ACCESO DENEGADO")
    }
}