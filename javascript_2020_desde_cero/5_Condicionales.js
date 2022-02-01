let valorPositivo = 5
let valorNegativo = -5
let cero = 0

//Condicional Simple
if(valorPositivo>0) console.log(`${valorPositivo} es mayor que ${cero}`)

if(valorPositivo>0){
    console.log(`${valorPositivo} es mayor que ${cero}`)
    console.log(`${valorPositivo} es un entero`)
}

//Condicional Compuesta
if(valorPositivo>0){
    console.log(`${valorPositivo} es mayor que ${cero}`)
    // console.log(`${valorPositivo} es un entero`)
} else{
    console.log(`${valorPositivo} es menor que ${cero}`)
}

//Condicional Multiple
if(valorPositivo>0){
    console.log(`${valorPositivo} es mayor que ${cero}`)
    // console.log(`${valorPositivo} es un entero`)
} else if(valorPositivo<0){
    console.log(`${valorPositivo} es menor que ${cero}`)
} else{
    console.log(`El valor es igual a ${cero}`)
}

//Operadores logicos
// && significa Y
// || significa O

let verdad = true
let falso = false
if(verdad === true) console.log('Soy una verdad')
if(verdad) console.log('Soy una verdad')
if(false === false) console.log('Soy una falsedad')
if(!falso) console.log('Soy una falsedad')

