var nombre2 = 'Luis'
var nombre = 'Luis'

function printToUpperCase(){
    nombre2 = nombre2.toUpperCase()
    console.log(nombre2)
}

printToUpperCase()

function printToUpperCase2(n){
    n = n.toUpperCase()
    console.log(`${n} desde la funcion 2`)
}

printToUpperCase2(nombre)

function printToUpperCase3(nombre){
    nombre = nombre.toUpperCase()
    console.log(`${nombre} desde la funcion 3`)
}
printToUpperCase3(nombre)

console.log(nombre2)
console.log(nombre)