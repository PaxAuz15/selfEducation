let i = 1;
let msgInput = 'Ingrese un entero';
let input = prompt(msgInput);
let inputNumber = Number(input);
let acumuladorSuma = 0;
const LIMITE = 50;

const div = document.getElementById('div-respuesta');


if(inputNumber>LIMITE){
    div.textContent = `Ud ingresó un valor mayor a ${LIMITE}. Su valor es ${inputNumber}`;
}

acumuladorSuma+=inputNumber;

while(acumuladorSuma<=LIMITE){
    input = prompt(msgInput);
    inputNumber = Number(input);
    acumuladorSuma+=inputNumber;
    i++;
}

i--;
acumuladorSuma-=inputNumber;
div.textContent =`Ud ingresó ${i} números antes de llegar al límite de ${LIMITE} y la suma de esos números es de ${acumuladorSuma}`;