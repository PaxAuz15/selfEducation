//tratar de no mezclar datos de diferentes tipos en un array

let numeros = [1,2,3,4,5]

let palabras = ['Hola', 'soy', 'Luis', 'Auz']

let booleans = [true,true,false]

console.log(`La palabra "${palabras[1]}" tiene ${palabras[1].length} letras`)

let numero = 5

//TODO: Array.isArray()
// Sirve para verificar si una variable es un array
// Devuelve un boolean
console.log(Array.isArray(numeros));

//FIXME: Eliminar elementos
console.log(numeros)
// .shift() -> elimina el primer elemento
numeros.shift()
console.log(numeros)
// .pop() -> elimina el ultimo elemento
numeros.pop()
console.log(numeros)

//TODO: LO QUE ELIMINAS PUEDES GRABARLO EN UNA VARIABLE
//FIXME: Eliminar elementos
console.log(numeros)
// .shift() -> elimina el primer elemento
let primerElementoEliminado = numeros.shift()
console.log(numeros)
// .pop() -> elimina el ultimo elemento
let ultimoElementoEliminado = numeros.pop()
console.log(numeros)

console.log(primerElementoEliminado);
console.log(ultimoElementoEliminado);

//TODO: Agregar elementos
let numeros2 = [1,2,3,4,5]
console.log(numeros2)
//agrega elementos al final y devuelve la nueva longitud del array
let newLength = numeros2.push(6,7,2) 
console.log(numeros2)
//agrega elementos al inicio y devuelve la nueva longitud del array
let newLength2 = numeros2.unshift(-1,0)
console.log(numeros2)

//TODO: Buscar elementos
// Devuelve la primera posicion que encuentre del elemento
console.log(numeros2.indexOf(2))
//Devuelve la ultima posicion que encuentre del elemento
console.log(numeros2.lastIndexOf(2))

//TODO: Revertir el orden de un array
console.log(numeros2)
numeros2.reverse()
console.log(numeros2)
// Se puede requerir cuando, por la logica del programa,
// se guardan los datos de una manera y se quiere tomar los
// datos al reves.

//TODO: Separador de elementos
console.log(numeros2.join())//Por defecto separa en comas
let stringArray = numeros2.join(' '); //separar por espacio
console.log(stringArray)
let stringGuionArray = numeros2.join('-');//separar por guiones
console.log(stringGuionArray);

//TODO: Metodo Splice()
//FIXME: Cambia el contenido de un array
//Eliminando elementos existentes y/o agregando nuevos elementos
//.splice(a,b,c,c1,c2,c3)
// a -> indice de inicio
// b -> numero de elementos a eliminar (opcional)
// c -> elementos para agregar (opcional)

// Si "b" es 0 no elimina nada
console.log(numeros2)
numeros2.splice(9,1,0)
console.log(numeros2)

//Si solo se agrega "a", elimina elementos desde esa posicion
numeros2.splice(8)
console.log(numeros2)

//TODO: Extraer elementos de un array. Devuelve un array
//.slice(a,b)
// a -> indice de inicio
// b -> indice de final (el valor de la ultima posicion no se extrae)
//Si solo se pasa "a", extrae desde "a" hasta el final

let newArray = numeros2.slice(1,3)
console.log(numeros2)
console.log(newArray)

let newArrayWithoutB = numeros2.slice(2)
console.log(newArrayWithoutB)
