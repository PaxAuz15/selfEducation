let i =0;
const DEFAULT_COLORS = ["azul", "amarillo", "rojo", "verde", "rosa"];
const MSG_INPUT = 'Ingrese un color';
let se_encuentra = false;
let div = document.getElementById('div-respuesta');

let inputUser = prompt(MSG_INPUT);
let inputLowerCase = inputUser.toLowerCase().trim();

for(i;i<DEFAULT_COLORS.length;i++){
    if(DEFAULT_COLORS[i]==inputLowerCase){
        se_encuentra = true;
    }
}
if (se_encuentra){
    div.textContent = `El color ${inputLowerCase} si se encuentra en la lista ${DEFAULT_COLORS}`;
}else{
    div.textContent = `El color ${inputLowerCase} no se encuentra en la lista ${DEFAULT_COLORS}`;
}
