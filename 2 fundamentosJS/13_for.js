var luis = {
    nombre: "Luis",
    apellido: "Auz",
    edad: 23,
    peso: 75
}

const INCREMENTO_PESO = 0.200, DISMINUCION_PESO = 0.200

console.log(`Al inicio del anio ${luis.nombre} tiene ${luis.peso}kg`)

var luis_cambio_peso = {
    nombre: "Luis",
    apellido: "Auz",
    edad: 23,
    peso: 75
}

const aumentarPeso = persona => persona.peso += INCREMENTO_PESO
const bajarPeso = persona => persona.peso -= DISMINUCION_PESO

// for(parte inicial, la condicion, el incremento)
for(var contador = 1; contador <= 365; contador++ ){
    var valueRandom = Math.random() //Random da valores de 0 - 1

    if(valueRandom < 0.25){
        aumentarPeso(luis_cambio_peso)
    } else if(valueRandom < 0.50){
        bajarPeso(luis_cambio_peso)
    }
}

console.log(`Al final del anio ${luis.nombre} tiene ${luis_cambio_peso.peso.toFixed(2)}kg`)
//toFixed es para redondear!
