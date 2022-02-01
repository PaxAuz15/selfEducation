var autos = [
    {
        marca: "Toyota",
        modelo: "Corolla",
        anio: 2020
    },
    {
        marca: "Chevrolet",
        modelo: "Sail",
        anio: 2016
    },
    {
        marca: "Mazda",
        modelo: "BT-50",
        anio: 2019
    }
]

var autoFilter = autos.filter(function(auto){
    return auto.anio < 2020
})

autoFilter
//No modifica el array central
//Crea un nuevo array filtro segun lo indicado en la funcion


//========================================================

var nombreAuto = autos.map(function(articulo){
    return articulo.marca
})

nombreAuto
// Mapea todo el contenido y solo trae lo que se pide en la funcion
// En este caso, no generó objetos dentro del array

var findAuto = autos.find(function(auto){
    return auto.marca === "Tesla"
})
// Busca el contenido y crea un, en este caso, un objeto

autos.forEach(function(auto){
    var autoFilter = {auto}
    console.log(autoFilter)
})
// Me crea objetos por separados! 
// Ya no es un array que los contiene

autos.forEach(function(auto){
    console.log(auto.marca)
})
// Muestra solo los nombres. Sin ser objetos

var autosViejos = autos.some(function(auto){
    return auto.anio < 2021;
})

autosViejos
// Realiza la busqueda de lo que establece la funcion
// Si se cumple, regresa un true. Caso contrario, un false

function addAuto(){
    autos.push(
        {
            marca: "Chevrolet",
            modelo: "Camaro",
            anio: 2000
        }
    )
}

addAuto()
autos
// Sirve para agregar un elemento al final del array

function deleteLastAuto(){
    autos.pop()
}

deleteLastAuto()
autos
// Sirve para eliminar el ultimo registro de un array

function deleteFirstAuto(){
    autos.shift()
}
deleteFirstAuto()
autos
// Sirve para eliminar el primer registro de un array