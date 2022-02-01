let div = document.getElementById('div-respuesta');
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
const VALOR_A_DIVIDIR = 23;
let msgInput = 'Ingrese un valor de DNI. Solo enteros positivos y máximo 8 dígitos';

let inputUser = prompt(msgInput);
let inputNumber = Number(inputUser);
let positionLetter;

while (inputNumber<=0 && inputNumber>999999){
    inputUser;
    inputNumber;
}

positionLetter = inputNumber%VALOR_A_DIVIDIR;

div.textContent = `El DNI ingresado es ${inputNumber} y su letra asignada es ${letras[positionLetter]}`;

