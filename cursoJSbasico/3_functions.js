// Declarar funciones

function myFunction(){
    return 3;
}

// Expresión

var myFunction = function(a,b){
    return a + b;
}

myFunction(3,5)

myFunction()


function saludarEstudiante(estudiante){
    console.log(estudiante)
}

//Generar plantilla de cadena de texto
function saludarVariosEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`); // Juntar un string (mensaje) con una variable
}

function sumar(a,b){
    var resultado = a+b;
    return resultado;
}

sumar(1,2);

//otra forma de sumar
function sumar(a,b){
    return a+b;
}

sumar(1,2);