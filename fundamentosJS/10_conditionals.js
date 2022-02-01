var luis = {
    nombre: 'Luis',
    apellido: 'Auz',
    edad: 22,
    profesiones: {
        ingeniero: false,
        estudiante: true 
    }
}

function profesiones(persona){
    console.log(`Este es el detalle de habilidades de ${persona.nombre}: `)
    if (persona.profesiones.ingeniero){
        console.log('Es un ingeniero')
    } else {
        console.log('No es un Ingeniero')
    }

    if (persona.profesiones.estudiante){
        console.log('Es un estudiante')
    } else {
        console.log('No es un estudiante')
    }
}

function mayorDeEdad(persona){

    if (persona.edad >= 18){
        console.log(`${persona.nombre} es mayor de edad. Tiene ${persona.edad} anios`)
    } else{
        console.log(`${persona.nombre} no es mayor de edad. Tiene tan solo ${persona.edad} anios`)
    }
}

profesiones(luis)
mayorDeEdad(luis)