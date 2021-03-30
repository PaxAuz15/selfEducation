const MSG_INPUT="Ingrese una palabra";
const VOCALES = ['a','e','i','o','u'];
const SEPARADOR = ""

let i=0;
let iVocales =0;
let iConsonantes =0;

let div = document.getElementById('div-respuesta');
let inputUser = prompt(MSG_INPUT).toLowerCase();

let sacarEspacios = inputUser.trim();

let arregloDeInput = sacarEspacios.split(SEPARADOR);

for(i;i<arregloDeInput.length;i++){
    if((VOCALES.indexOf(arregloDeInput[i]))==-1){
        iConsonantes++;
    }else{
        iVocales++;
    }
}

div.textContent = `La cantidad de vocales de la palabra ${inputUser} es ${iVocales}, el número de consonantes es ${iConsonantes} y su longitud es ${arregloDeInput.length}`;



