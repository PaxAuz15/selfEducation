var nombre = 'Luis', edad = 22

//funcion normal 
function printAge(){
    console.log(`${nombre} tiene ${edad} anios`)
}
printAge()

// Funcion que recibe parametros
function printAgeR(n,e){
    // n=nombre & e=edad
    console.log(`${n} tiene ${e} anios`)
}
// FIXME: No se encuentra validado campos vacios ni tipo de datos a recibir en esta funcion

printAgeR('Luis',23)
printAgeR('Gabriel',18)
printAgeR('Mariuxi',18)
printAgeR()