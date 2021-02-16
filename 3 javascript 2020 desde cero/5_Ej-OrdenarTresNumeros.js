//Al querer ordenar tres numeros, se utilizan PERMUTACIONES
// Permutaciones es igual a Fibonacci
// 3! = 3*2*1

const numbers = document.getElementById('numbers')
const result = document.getElementById('result')

let numero1 = prompt('Introduzca el primer numero')
let numero2 = prompt('Introduzca el segundo numero')
let numero3 = prompt('Introduzca el tercer numero')
let choice = prompt('Ingrese 0 si quiere ascendente y 1 si quiere descendente')

numbers.textContent = `Los numeros introducidos son ${numero1}, ${numero2} y ${numero3}`

if(choice === 1){
    console.log('ORDENAR DE FORMA DESCENDENTE')
    if(numero1 >= numero2 && numero1>=numero3){
        if(numero2 >= numero3){
            console.log(`${numero1} - ${numero2} - ${numero3}`);
            result.textContent = `Los numeros ordenados de manera descendente: ${numero1} - ${numero2} - ${numero3}`
        }else{
            console.log(`${numero1} - ${numero3} - ${numero2}`);
            result.textContent = `Los numeros ordenados de manera descendente: ${numero1} - ${numero3} - ${numero2}`
        }
    }else if(numero2>=numero1 && numero2>=numero3){
        if(numero1 >= numero3){
            console.log(`${numero2} - ${numero1} - ${numero3}`);
            result.textContent = `Los numeros ordenados de manera descendente: ${numero2} - ${numero1} - ${numero3}`
        }else{
            console.log(`${numero2} - ${numero3} - ${numero1}`);
            result.textContent = `Los numeros ordenados de manera descendente: ${numero2} - ${numero3} - ${numero1}`
        }
    }else if(numero3 >= numero1 && numero3 >= numero2){
        if(numero1 >= numero2){
            console.log(`${numero3} - ${numero1} - ${numero2}`);
            result.textContent = `Los numeros ordenados de manera descendente: ${numero3} - ${numero1} - ${numero2}`
        }else{
            console.log(`${numero3} - ${numero2} - ${numero1}`);
            result.textContent = `Los numeros ordenados de manera descendente: ${numero3} - ${numero2} - ${numero1}`
        }
    }
}else {
    console.log('ORDENAR DE FORMA ASCENDENTE')
    if(numero1 >= numero2 && numero1 >= numero3){
        if(numero2 >= numero3){
            console.log(`${numero3} - ${numero2} - ${numero1}`);
            result.textContent = `Los numeros ordenados de manera ascendente: ${numero3} - ${numero2} - ${numero1}`
        }else{
            console.log(`${numero2} - ${numero3} - ${numero1}`);
            result.textContent = `Los numeros ordenados de manera ascendente: ${numero2} - ${numero3} - ${numero1}`
        }
    }else if(numero2 >= numero1 && numero2 >= numero3){
        if(numero1 >= numero3){
            console.log(`${numero3} - ${numero1} - ${numero2}`);
            result.textContent = `Los numeros ordenados de manera ascendente: ${numero3} - ${numero1} - ${numero2}`
        }else{
            console.log(`${numero1} - ${numero3} - ${numero2}`);
            result.textContent = `Los numeros ordenados de manera ascendente: ${numero1} - ${numero3} - ${numero2}`
        }
    }else if(numero3 >= numero1 && numero3 >= numero2){
        if(numero1 >= numero2){
            console.log(`${numero2} - ${numero1} - ${numero3}`); 
            result.textContent = `Los numeros ordenados de manera ascendente: ${numero2} - ${numero1} - ${numero3}`
        }else{
            console.log(`${numero1} - ${numero2} - ${numero3}`);
            result.textContent = `Los numeros ordenados de manera ascendente: ${numero1} - ${numero2} - ${numero3}`
        }
    }
}