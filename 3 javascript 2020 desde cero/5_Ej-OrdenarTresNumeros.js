let numero1 = 8
let numero2 = 15
let numero3 = 20

console.log('ORDENAR DE FORMA DESCENDENTE')
if(numero1 > numero2 && numero1>numero3){
    if(numero2 > numero3){
        console.log(`${numero1} - ${numero2} - ${numero3}`)
    }else{
        console.log(`${numero1} - ${numero3} - ${numero2}`)
    }
}else if(numero2>numero1 && numero2>numero3){
    if(numero1 > numero3){
        console.log(`${numero2} - ${numero1} - ${numero3}`)
    }else{
        console.log(`${numero2} - ${numero3} - ${numero1}`)
    }
}else if(numero3 > numero1 && numero3 > numero2){
    if(numero1 > numero2){
        console.log(`${numero3} - ${numero1} - ${numero2}`) 
    }else{
        console.log(`${numero3} - ${numero2} - ${numero1}`)
    }
}

console.log('ORDENAR DE FORMA ASCENDENTE')
if(numero1 > numero2 && numero1 > numero3){
    if(numero2 > numero3){
        console.log(`${numero3} - ${numero2} - ${numero1}`)
    }else{
        console.log(`${numero2} - ${numero3} - ${numero1}`)
    }
}else if(numero2 > numero1 && numero2 > numero3){
    if(numero1 > numero3){
        console.log(`${numero3} - ${numero1} - ${numero2}`)
    }else{
        console.log(`${numero1} - ${numero3} - ${numero2}`)
    }
}else if(numero3 > numero1 && numero3 > numero2){
    if(numero1 > numero2){
        console.log(`${numero2} - ${numero1} - ${numero3}`) 
    }else{
        console.log(`${numero1} - ${numero2} - ${numero3}`)
    }
}