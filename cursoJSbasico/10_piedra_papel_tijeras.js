var options = ['Piedra', 'Papel', 'Tijeras']
console.log(options)
var piedra = options[0]
var papel = options[1]
var tijeras = options[2]
var choice1 = piedra;
var choice2 = papel;
if (choice1 === piedra && choice2 === tijeras 
    || choice1 === tijeras && choice2 === piedra){
    console.log("Piedra gana a Tijeras")
} else if (choice1 === piedra && choice2===papel
    || choice1 === papel && choice2===piedra){
    console.log("Papel gana a Piedras")
}else if(choice1 === tijeras && choice2 === papel||choice1 === papel && choice2 === tijeras){
    console.log("Tijeras gana a Papel")
}