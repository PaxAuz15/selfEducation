var luis = {
    nombre: 'Luis'
}

var otraPersona = {
    nombre: 'Luis'
}

//es lo ultimo que lo que esta declarado arriba
// var otraPersona = {
//     ...luis
// }

luis == otraPersona //false
luis === otraPersona //false
/*
LA EXPLICACION:
Se debe a que, cuando se comparan objetos (no son variables primitivas), se verifica su lugar en espacio
en memoria.
Por ejemplo... Si yo hiciera

otraPersona = luis 

entonces si consulto:
otraPersona === luis //sera true
*/

luis.nombre === otraPersona.nombre //true