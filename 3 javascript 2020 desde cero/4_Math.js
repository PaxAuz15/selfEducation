/*
    OBJETO Math
*/ 
let valorPositivo = 5
let valorNegativo = -5

let valorDecimal = 5.6


//numero de Euler
console.log(Math.E)

//valor de Pi
console.log(Math.PI)

//valor absoluto
console.log(Math.abs(valorNegativo))
console.log(Math.abs(valorPositivo))

//redondeo hacia abajo
console.log(Math.floor(valorDecimal))
//redondeo hacia arriba
console.log(Math.ceil(valorDecimal))

//potencias(base,exponente)
console.log(Math.pow(valorPositivo,2))
//raiz cuadrada
console.log(Math.sqrt(valorPositivo))

//generar pseudoaleatorio
console.log(Math.random()) //Genera entre 0 - 1
console.log(Math.random()*100) //Genera entre 0 - 100

// console.log(Math.random() *(valorMaximo-valorMinimo)+valorMinimo)
console.log(Math.random() *(10-5)+5)
console.log(Math.round(Math.random()*(10-5)+5)) //Genera solo enteros porque estoy redondeando

console.log(Math.sign(valorNegativo))
console.log(Math.sign(valorPositivo))
//Devuelve un -1 si es negativo
//Devuelve un 1 si es positivo
//Devuelve un 0 si es un cero
