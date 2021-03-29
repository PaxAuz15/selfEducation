let i = 1;
let msgInput = 'Ingrese un entero mayor a 0';
let input = prompt(msgInput);
let inputNumber = Number(input);
let factorial=1;

const div = document.getElementById('div-respuesta');

while (inputNumber < 1){
    input = prompt(msgInput);
    inputNumber = Number(input);
}

for(i;i<=inputNumber;i++){
    factorial*=i; 
}

div.textContent = `El factorial de ${inputNumber} es ${factorial}`;
