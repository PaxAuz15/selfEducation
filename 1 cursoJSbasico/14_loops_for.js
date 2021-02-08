var estudiantes = ["Luis", "Gabriel", "Geoconda", "Antonio"]

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`)
}
//Se utiliza un indice que recorre el arreglo
for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i])
}

//Se utiliza un objeto singular que pertene al plural 
// del array
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}