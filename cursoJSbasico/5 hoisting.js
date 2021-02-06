console.log(miNombre);

var miNombre = "Luis";
// Al momento de imprimir el resultado, saldrá undefined. 
// El navegador add la linea: 
// var miNombre = undefined

// ==============================================

var miNombre = undefined;

console.log(miNombre + " Soy este hoisting");

miNombre = "Luis"

// ============================================== Hoisting en funciones

saludo();

function saludo() {
    console.log("Hola "+miNombre) 
    // Las funciones si se ejecutan a pesar de que las declares antes de definirlas
    // Pero la variable miNombre saldrá undefined
}

var miNombre = "Luis"
