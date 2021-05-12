const first_list = document.getElementById('first_list');
console.log(first_list.parentElement); //Elemento Padre
console.log(first_list.children); // Listar hijos
console.log(first_list.firstElementChild); //Primer hijos
console.log(first_list.lastElementChild); // Ultimo Hijo
console.log(first_list.parentElement.nextElementSibling); //Siguiente Hermano
console.log(first_list.parentElement.previousElementSibling); //Hermano Previo