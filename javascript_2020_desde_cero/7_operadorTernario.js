//Saber que un numero es par o impar
let numero = 2

if(numero % 2 === 0){
    console.log(`${numero} es par`)
}else{
    console.log(`${numero} es impar`)
}

//OPERADOR TERNARIO
(numero % 2 === 0) ? console.log(`${numero} es par`):console.log(`${numero} es impar`);

(numero % 2 === 0) ?
    (
        console.log(`${numero} es par`),
        console.log(`${numero} es par 2`)
    ):
    (
        console.log(`${numero} es impar`),
        console.log(`${numero} es impar 2`)
    );