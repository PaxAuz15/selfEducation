// cohersiones explicitas => obligamos a cambiar un valor por otro
var a = 7
var b = a + ""
console.log(b) // Muestra el 7 pero es un string
typeof b //String

var c = String(a); //Convertir el numero 7 en un string
typeof c //String
console.log(c) // 7 string

var d = Number(c); // convertir el string 7 a number 7
typeof d //Number
console.log(d) //7 number

// Los inputs traen un string. Si se ingresan numeros debemos convertirlos a number para manejar numbers

// cohersiones implicitas => el lenguaje cambia el tipo de valor por sí mismo

var a = 4 + "7" 
// En este caso concatena
typeof a //String

var b = 4 * "7"
// En este caso ocupa la transformacion del 7 string a 7 number
typeof b //number