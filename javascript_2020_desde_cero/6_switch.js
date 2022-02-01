const signo = prompt("Ingrese su signo zodiacal")

//Cuando existen muchos if sobre una misma variable u objeto, se usa un switch
switch(signo){
    case "acuario":
    case "Acuario":
        console.log("Eres acuario")
        break
    case "tauro":
        console.log("Eres tauro")
        break
    case "piscis":
        console.log("Eres un piscis")
        break
    default:
        console.log("No ingresé muchos signos")
        break
}