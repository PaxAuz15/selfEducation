var luis = {
    nombre: "Luis",
    apellidos: "Auz",
    edad: 23,
    peso: 80
}

var luis_cambio_peso = {
    nombre: "Luis",
    apellidos: "Auz",
    edad: 23,
    peso: 80
}

console.log(`${luis_cambio_peso.nombre} tiene ${luis_cambio_peso.peso}kg. Debe bajar 3kg`)

const INCREMENTO_PESO = 0.200, DISMINUCION_PESO = 0.200
const OBJETIVO = luis_cambio_peso.peso - 3
var diasParaBajarDePeso = 0

const subir_peso = persona => persona.peso += INCREMENTO_PESO
const bajar_peso = persona => persona.peso -= DISMINUCION_PESO

const comeMucho = () => Math.random() < 0.3
const hacerEjercicio = () => Math.random() < 0.4

while (luis_cambio_peso.peso > OBJETIVO){
    // debugger
    if(comeMucho()){
        subir_peso(luis_cambio_peso)
        // console.log('Ejecutando comer mucho')
    }
    if(hacerEjercicio()){
        bajar_peso(luis_cambio_peso)
        // console.log('Ejecutando bajar peso')
    }
    diasParaBajarDePeso += 1
}

console.log(`Pasaron ${diasParaBajarDePeso} dias para que ${luis_cambio_peso.nombre} adelgace. Ahora tiene ${luis_cambio_peso.peso.toFixed(2)}`)
