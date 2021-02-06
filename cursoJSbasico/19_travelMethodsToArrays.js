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