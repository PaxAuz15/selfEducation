let choice = prompt('Calculo del area de: 1) triangulo 2) rectangulo 3) circulo');
let base;
let height;
let radius;
const PI = 3.14;
let numberChoice = Number(choice);
let triangle = 0;
let rect = 0;
let circle = 0;
let msgBase = 'Ingrese el valor de la base';
let msgHeight = 'Ingrese el valor de la altura';
let msgRadius = 'Ingrese el valor del radio';

const div = document.getElementById('div-respuesta');

while (numberChoice != 1 && numberChoice != 2 && numberChoice != 3){
    choice = prompt('Calculo del area de: 1) triangulo 2) rectangulo 3) circulo');
    numberChoice = Number(choice);
}

switch (numberChoice) {
    case 1:
        base = prompt(msgBase);
        height = prompt(msgHeight);
        triangle = (Number(base) * Number(height)) / 2;
        div.textContent = `El area del triangulo es ${triangle}`;
        // return triangle;
        break;
    case 2:
        base = prompt(msgBase);
        height = prompt(msgHeight);
        rect = (Number(base) * Number(height));
        div.textContent = `El area del rectangulo es ${rect}`;
        // return rect;
        break;
    case 3:
        radius = prompt(msgRadius);
        circle = PI * Number(radius);
        div.textContent = `El area del circulo es ${circle}`;
        // return circle;
        break;
    default:
        div.textContent = `No ingreso una opcion correcta`;
        break;
}