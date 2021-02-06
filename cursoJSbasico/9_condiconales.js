// IF - ELSE
if (true) {
    //la condicion del if debe ser cierto para ejecutar el console.log
    console.log("Hola mundo!") 
} else {
    //la conficion del if es falso y se ejecuta esta porcion de code
    console.log("Hola mundo si es falso") 
}

// IF - ELSE IF - ELSE
//TODO:
// mayor de edad puede votar
// si no es mayor de edad no puede votar
// si es mayor de 18 anios no es la primera vez que ha votado

var edad = 18;

if (edad === 18){
    console.log("Puede votar");
} else if (edad > 18){
    console.log("No es la primera vez que vota")
} else {
    console.log("No puede votar")
}


//OPERADOR TERNARIO => juntas if & else en una linea

// condition ? true : false;

var number = 1;

var resultado = number === 1 ? "Soy verdad" : "No soy verdad";



