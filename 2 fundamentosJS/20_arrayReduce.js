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

const contadorDeEdades = (acumuladorParaElTotal, {edad}) => acumuladorParaElTotal + edad

var totalDeEdades = personas.reduce(contadorDeEdades,0)

console.log(`El total de edades es ${totalDeEdades}`)