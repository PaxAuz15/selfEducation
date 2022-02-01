var luis = {
    nombre: 'Luis',
    apellido: 'Auz',
    edad: 22
}

var gabriel = {
    nombre: 'Gabriel',
    apellido: 'Auz',
    edad: 18
}

function printNameAge(persona){
    var {nombre} = persona //var nombre = persona.nombre
    var {edad} = persona //var edad = persona.edad
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} anios`)
}

printNameAge(luis)
printNameAge(gabriel)