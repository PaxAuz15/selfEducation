const numbers = document.getElementById('numbers');
const result = document.getElementById('result');


let numero1 = prompt('Introduzca el primer numero')
let numero2 = prompt('Introduzca el segundo numero')
let numero3 = prompt('Introduzca el tercer numero')
let choice = prompt('Ingrese 0 si quiere descendente y 1 si quiere ascendente')
console.log(typeof(choice));

let choiceNumber = Number(choice);

console.log(typeof(choiceNumber));

if(choiceNumber === 0){
    if(numero1 <= numero2 && numero1 <= numero3){
        if(numero2 <= numero3){
            result.textContent = `${numero2} - ${numero3} - ${numero1}`;
        }else if (numero3 <=  numero2){
            result.textContent = `${numero3} - ${numero2} - ${numero1}`;
        }
    }else if(numero2 <= numero1 && numero2 <= numero3){
        if(numero1 <= numero3){
            result.textContent = `${numero3} - ${numero1} - ${numero2}`;
        }else if (numero3 <=  numero1){
            result.textContent = `${numero1} - ${numero3} - ${numero2}`;
        }
    }else if(numero3 <= numero1 && numero3 <= numero2){
        if(numero2 <= numero1){
            result.textContent = `${numero1} - ${numero2} - ${numero3}`;
        }else if (numero1 <=  numero2){
            result.textContent = `${numero2} - ${numero1} - ${numero3}`;
        }
    }
}else if (choiceNumber === 1) {
    if (numero1 >= numero2 && numero2 >= numero3){
        if (numero2 >= numero3){
            result.textContent = `${numero3} - ${numero2} - ${numero1}`;
        }else if(numero3 >= numero2){
            result.textContent = `${numero2} - ${numero3} - ${numero1}`;
        }
    }else if (numero2 >= numero1 && numero2 >= numero3){
        if (numero1 >= numero3){
            result.textContent = `${numero3} - ${numero1} - ${numero2}`;
        }else if (numero3 >= numero1){
            result.textContent = `${numero1} - ${numero3} - ${numero2}`;
        }
    }else if (numero3 >= numero1 && numero3 >= numero2){
        if (numero1 >= numero2){
            result.textContent = `${numero2} - ${numero1} - ${numero3}`;
        } else if (numero2 >= numero1){
            result.textContent = `${numero1} - ${numero2} - ${numero3}`;
        }
    }
}

