var options = ['Piedra', 'Papel', 'Tijeras']
console.log(options)

var piedra = options[0]
var papel = options[1]
var tijeras = options[2]

var choice1 = piedra;
var choice2 = papel;

switch (choice1, choice2){
    case piedra,tijeras:
        console.log("Piedra gana a Tijeras")
        break
    case tijeras,piedra:
        console.log("Piedra gana a Tijeras")
        break
    case piedra,papel:
        console.log("Papel gana a Piedra")
        break
    case papel,piedra:
        console.log("Papel gana a Piedra")
        break
    case papel,tijeras:
        console.log("Tijeras gana a Papel")
        break
    case tijeras,papel:
        console.log("Tijeras gana a Papel")
        break
    default:
        console.log("No estás jugando")
}