var luis = {
    nombre: "Luis",
    apellido: "Auz",
    edad: 77,
    altura: 1.5
}

var geoconda = {
    nombre: "Geoconda",
    apellido: "Garcia",
    edad: 56,
    altura: 1.45
}

var luisito = {
    nombre: "Luis",
    apellido: "Auz",
    edad: 23,
    altura: 1.65
}

var gabriel = {
    nombre: "Gabriel",
    apellido: "Auz",
    edad: 18,
    altura: 1.57

}

var personas = [luis,geoconda,luisito,gabriel]

const modificarAlturaCM = persona => {
    //Esto utiliza el array personas pero no lo modifica
    return{
        ...persona,
        altura: persona.altura * 100
    }
    // Esta opcion modifica el array personas
    // const modificarAlturaCM = persona => persona.altura *= 100
}


var alturaCM = personas.map(modificarAlturaCM)

console.log(alturaCM)