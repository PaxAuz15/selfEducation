let arrayNumbers = [];
let arrayOdd = [];
let arrayEven = [];
let randomNumber;

let msgInput = 'Ingrese el valor #';
let i = 1;
let input;
let inputNumber;
let multiplicacion;

for(i;i<=5;i++){
    input = prompt(`${msgInput}${i}`);
    inputNumber = Number(input);
    arrayNumbers.push(inputNumber);
}

let iArray=0;
for(iArray;iArray<arrayNumbers.length;iArray++){
    randomNumber = Math.round(Math.random()*(10-1)+1);
    multiplicacion = arrayNumbers[iArray]*randomNumber;
    (multiplicacion%2===0)?arrayOdd.push(multiplicacion):arrayEven.push(multiplicacion);
    console.log(`${arrayNumbers[iArray]}x${randomNumber}=${multiplicacion}`);
}

console.log(`Los numeros pares guardados son ${arrayOdd} y los impares son ${arrayEven}`);



