var estudiantes = ["Luis", "Marjorie", "Gabriel", "Antonio"]

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`)
}

while(estudiantes.length > 0){
    console.log(estudiantes)
    var estudiante = estudiantes.shift()
    saludarEstudiantes(estudiante)
    
}

// El problema aquí es que va eliminando cada estudiante
// Mientras los va mostrando