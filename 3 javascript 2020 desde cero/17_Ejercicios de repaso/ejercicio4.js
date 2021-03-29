let i = 1;
let msgPrime = 'es un valor primo';
let msgNotPrime = 'no es un valor primo';
let input = prompt("Ingrese un número mayor 1");
let inputNumber = Number(input);
// const ONE = 1;
let arrayDivision = [];
let arrayVerification = [i,inputNumber];

const div = document.getElementById('div-respuesta');

while (inputNumber <= 1){
    input = prompt("Ingrese un valor mayor a 1");
    inputNumber = Number(input);
}

for(i;i<=inputNumber;i++){
    (inputNumber%i===0)?arrayDivision.push(i):console.log("nada")
}

if(arrayDivision.join()===arrayVerification.join()){
    div.textContent = `${inputNumber} ${msgPrime}`
}else{
    div.textContent = `${inputNumber} ${msgNotPrime}`
}

