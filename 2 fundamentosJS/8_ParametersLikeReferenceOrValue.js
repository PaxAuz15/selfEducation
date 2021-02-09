var luis = {
    nombre: 'Luis',
    edad: 22
}

var gabriel = {
    nombre: 'Gabriel',
    edad: 18
}

//Esta funcion graba la modificacion sobre el objeto afectado por esta funcion
function cumpleanios(persona){
    persona.edad += 1
}

//Esta funcion no graba la modificacion sobre el objeto. Con esta funcion se puede crear un objeto nuevo
function cumpleanios2(persona){
    return {
        ...persona,
        edad: persona.edad + 1
    }
}
