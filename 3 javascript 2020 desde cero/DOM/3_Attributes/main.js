const title = document.getElementById('title');
const name = document.getElementById('name');
// ATTRIBUTES
// Atributos HTML
console.log(title);
console.log(title.getAttribute('class'));
title.setAttribute('class','new class')
console.log(title.getAttribute('class'));

// CLASS
title.classList.add("main-title");
console.log(title.classList);