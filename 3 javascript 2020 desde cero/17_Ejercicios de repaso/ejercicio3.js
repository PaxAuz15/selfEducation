let i = 0;
let msgOdd = 'es un par';
let msgEven = 'es impar';
let input = prompt("Ingrese un número");
let inputNumber = Number(input);


while (inputNumber <= 0){
    input = prompt("Ingrese un valor mayor a cero");
    inputNumber = Number(input);
}

for (i;i<=inputNumber;i++){
    (i % 2 === 0) ?
    (
        // div.textContent = `${i} ${msgOdd}`
        // div.textContent = `${i} ${msgOdd}`,
        // document.body.appendChild(div)
        console.log(`${i} ${msgOdd}`)
    ):
    (
        // div.textContent = `${i} ${msgEven}`
        console.log(`${i} ${msgEven}`)
        // div.textContent = `${i} ${msgEven}`,
        // document.body.appendChild(div)
    );
}
