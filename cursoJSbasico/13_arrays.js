var fruites = ["apple", "orange", "pineapple"];

console.log(fruites) //["apple", "orange", "pineapple"]

console.log(fruites.length) // 3 (cuantos elementos tiene el array)

console.log(fruites[0]) //apple (imprimir un elemento especifico)

//agregar elementos al final del array
var moreFruites = fruites.push("banana")

// eliminar ultimo elemento
var deleteLastFruite = fruites.pop("banana");

//agregar elementos al inicio del array
var newLength = fruites.unshift("banana")

//eliminar primer elemento del array
var deteleFirstFruite = fruites.shift("banana")

//conocer el indice de un elemento array
var positionFruite = fruites.indexOf("orange")