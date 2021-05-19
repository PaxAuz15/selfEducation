const msg = 'This is'
// window.alert('Hola')
// alert('Hola')

// let inputData = prompt('Input any data');
// console.log(inputData);

// const choice = confirm('Do you wanna to keap learning JS?')
// console.log(choice);
// console.dir(choice);
// console.error(choice);

const array = [1,2,3,4];
console.table(array);

let href = location.href
console.log(`${msg} the link = ${href}`);

let protocol = location.protocol
console.log(`${msg} the protocol = ${protocol}`);

let host = location.host
console.log(`${msg} the hostname = ${host}`);

let pathname = location.pathname
console.log(`${msg} the pathname = ${pathname}`);

let hash = location.hash
if(hash == ''){
    console.log('No hay hash');
}else{
    console.log(`${msg} the hash = ${hash}`);
}
// location.reload -> Sirve pa recargar el sitio web

