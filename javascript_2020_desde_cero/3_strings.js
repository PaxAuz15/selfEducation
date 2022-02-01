/*TODO: Metodos y Parametros 
    Metodo:Es todo aquello que el string puede hacer. Tienen un () al final
    Parametro: Caracteristicas del string por ser string

    string.metodo()
    string.parametro
*/

let frase = 'Hola Mundo'

//devuelve la longitud de la cadena
let cantidadDeCaracteres = frase.length; 
console.log(cantidadDeCaracteres);

let todoMayusculas = frase.toUpperCase();
console.log(todoMayusculas)

let todoMinusculas = frase.toLowerCase();
console.log(todoMinusculas)

// Sirve para encontrar un caracter dentro de un string y ubicarte su posicion
console.log(frase.indexOf('o'));

//Sirve para reemplazar una palabra dentro de un string pero no altera el string como variable
console.log(frase.replace('Mundo','Luis'))
console.log(frase)

//Sirve para extraer los caracteres segun suposicion
// primer valor es el inicial y el segundo es el final
console.log(frase.substring(2))
console.log(frase.substring(2,9))

//Lo mismo que substring. Solo que este acepta valores negativos
console.log(frase.slice(-3))
console.log(frase.slice(2))
console.log(frase.slice(0,-6)) //Los ultimos seis caracteres los ignora

//Elimina los espacios al inicio y al final
let frase2 = '    Hola Mundo    '
console.log(frase2)
console.log(frase2.length)
console.log(frase2.trim())
console.log(frase2.trim().length)


//TODO: ES6

//Verifica si un string empieza con un caracter.
console.log(frase.startsWith('H'))
//Tambien se puede agregar desde que caracter debe fijarse
console.log(frase.startsWith('M',5)) //posicion IndexOf

//Verifica si un string termina con un caracter
console.log(frase.endsWith('o'))
//Tambien se puede pasar la longitud que se debe fijar
console.log(frase.endsWith('a',4))
//Tambien verifica la ultima palabra
console.log(frase.endsWith('Mundo'))

//Lo mismo que IndexOf pero devuelve un booleano
console.log(frase.includes('a'))
//Puedes indicar por donde empezar a buscar
console.log(frase.includes('a',7))

//Repetir un string como variable o no las n cantidad de veces
let palabra = 'Hola'
console.log(palabra.repeat(3))
console.log('Luis'.repeat(3))

//Template Strings
let nombre = 'Luis'
let apellido = 'Auz'
let edad = 23

console.log(`Hola, mi nombre es ${nombre} ${apellido}. Tengo ${edad} anios`)

console.log(`El proximo anio cumples ${edad+1}`)