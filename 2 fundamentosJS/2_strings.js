var nombre = 'Luis', apellido = 'Auz'

var nombreEnMayusculas = nombre.toUpperCase() // generar mayusculas de un string

var apellidoEnMinusculas = apellido.toLowerCase() // generar minusculas de un string

var primerLetraDelNombre = nombre.charAt(0) //obtener una letra determinada de un string

var frase = 'Luis es un gamer'

var letraDeFrase = frase.charAt(5) //los espacios en blancos son una posicion a tomar en cuenta

var cantidadDeCaracteres = frase.length //cuenta los caracteres de un string [es un atributo, no una funcion]

// var nombreCompleto = nombre + ' ' + apellido
var nombreCompleto = `${nombre} ${apellido}` // interpolacion JS //Hace exactamente lo mismo que el cod#15

// var str = nombre.charAt(1) + nombre.charAt(2)

var str = nombre.substr(1,2) //Obtenemos un string hijo de un string padre 
//substr(
    // primer numero de la posicion de donde queremos obtener o empezar el string hijo,
    // cantidad de caracteres que quiero obtener)

