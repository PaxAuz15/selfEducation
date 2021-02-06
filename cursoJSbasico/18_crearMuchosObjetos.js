function auto(marca,modelo,anio){
    this.marca = marca
    this.modelo = modelo
    this.anio = anio
}

var contador

for(contador=1;contador < 31; contador++){
    var newAuto = new auto(
        `Toyota${contador}`,
        "Corolla",
        2020
    )
    console.log(newAuto)
}

//Genera 30 autos pero no los almacena en una lista de autos