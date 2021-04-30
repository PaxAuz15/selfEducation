//FIXME: Ejemplo 1
const addNumbers = (a,b,c) => {
    console.log(a+b+c);
};

let numbers = [1,2,3];

// TODO: de esta manera se puede pasar un array con elementos dentro de una función
addNumbers(...numbers)


// FIXME: Ejemplo 2
let users = ['Luis','Mariuxi','Gabriel'];
let newUsers = ['Geoconda','Luis Jr'];

// Manera antigua
// users.push(newUsers[0],newUsers[1])

// TODO: de esta manera se puede agregar todos los elementos de un array dentro de otro array
users.push(...newUsers);

// FIXME: Ejemplo 3
let array1 = [1,2,3];

// Esto haría un array de un elemento y ese elemento es un array con los tres elementos
// let copy_array1 = [array1]

// TODO: Copiar el contenido de un array en otra variable array
let copy_array1 = [...array1];

// FIXME: Ejemplo 4
let array_one = [1,2,3,4,5];
let array_two = [6,7,8,9,10];

// Esta es una forma de concatenar array. Se necesita un array base para concatenar los array que se quiera.
// let concatArray = array_one.concat(array_two);

// TODO: Una forma de concatenar arrays
let concatArray = [...array_one,...array_two];

// FIXME: Enviar una cantidad indefinida de argumentos a una función (parámetros REST)

const restParams = (...parametros)=>{
    console.log(parametros);
    console.log(...parametros);
}

restParams(1,2,3,4,5,'etc')

// FIXME: Utilizar la librería Math

const arrayNumbers = [1,2,45,32,-13,78];

// Si pasamos el array de números de manera normal, va a devolver NanNan
// console.log(Math.max(arrayNumbers));

// TODO: De esta manera si se va a devolver el resultaddo deseado
console.log(Math.max(...arrayNumbers));

// FIXME: Eliminar elementos duplicados

const arrayDuplicados = [1,2,3,4,5,2,4,3,1];

console.log(new Set(arrayDuplicados)); //Esto devuelve un objeto Set

console.log([...new Set(arrayNumbers)]); //Esto devuelve un array