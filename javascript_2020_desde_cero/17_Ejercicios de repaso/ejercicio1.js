let div = document.getElementById('div-respuesta');

let nombre = prompt('Introduzca su nombre');
let edad = prompt('Introduzca su edad');

let mensaje = `Hola ${nombre}, tienes ${edad} y el anio que viene tendras ${edad+1} anios.`;

div.textContent = `Hola ${nombre}, tienes ${edad} y el anio que viene tendras ${Number(edad)+1} anios.`;
console.log(mensaje);