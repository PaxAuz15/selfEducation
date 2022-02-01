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

const esVieja = persona => persona.edad > 30
const esJoven = ({ edad }) => edad <= 30

var personasViejas = personas.filter(esVieja)
var personasJovenes = personas.filter(esJoven)

console.log(personasViejas)
console.log(personasJovenes)