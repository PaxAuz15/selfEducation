function identidad(nombres, apellidos, dni, edad) {
    this.nombres = nombres
    this.apellidos = apellidos
    this.dni = dni
    this.edad = edad
}

var newIdentidad = new identidad(
    "Gabriel Alfredo",
    "Auz Garcia",
    "1315490979",
    18
)

newIdentidad