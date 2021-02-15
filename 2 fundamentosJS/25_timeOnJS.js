console.log('a')
// console.log('b')
setTimeout(()=>console.log('b'),2000)
setTimeout(()=>console.log('d'),1000)
console.log('c')

for(var i =0; i <10000; i++){
    // console.log(i)
}
console.log('ya contamos los 100 numeros')

/*
    Esos procesos asincronos (setTimeOut) van directo a la pila de tareas
    Y se empieza a ejecutar cuando se haya ejecutado primero el main del js
    Y luego se van mostrando los resultados de los asincronos segun como vayan tardando
*/