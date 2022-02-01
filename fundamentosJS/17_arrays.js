var luis = {
    nombre: "Luis",
    apellido: "Auz",
    edad: 77
}

var geoconda = {
    nombre: "Geoconda",
    apellido: "Garcia",
    edad: 56
}

var luisito = {
    nombre: "Luis",
    apellido: "Auz",
    edad: 23
}

var gabriel = {
    nombre: "Gabriel",
    apellido: "Auz",
    edad: 18
}

var personas = [luis,geoconda,luisito,gabriel]

for(var i = 0; i < personas.length; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} tiene ${persona.edad} anios`)
}