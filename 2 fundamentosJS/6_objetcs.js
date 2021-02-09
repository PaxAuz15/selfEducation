var luis = {
    nombre: 'Luis',
    apellido: 'Auz',
    edad: 22
}

var gabriel = {
    nombre: 'Gabriel',
    apellido: 'Auz',
    edad: 18
}
//Obtener un valor dentro de una key de un objeto
function printToUpperCase(persona){
    console.log(persona.nombre.toUpperCase())
}

printToUpperCase(luis)
printToUpperCase(gabriel)

//Una manera directa de obtener el valor dentro de una key de un objeto
function printToUpperCaseBetter({apellido}){
    console.log(apellido.toUpperCase())
}

printToUpperCaseBetter(luis)
