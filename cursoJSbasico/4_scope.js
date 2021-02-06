//scope global

var nombre = "Luis"

//scope local
function juntarNombreApellido(){
    var apellido = "Auz" //apellido solo se puede utilizar en esta funcion
    return nombre+""+apellido
}

console.log(juntarNombreApellido())

console.log(apellido) //apellido is not defined 