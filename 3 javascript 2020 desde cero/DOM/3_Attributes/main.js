const title = document.getElementById('title');
const name = document.getElementById('name');
// ATTRIBUTES
// Atributos HTML
console.log(title);
console.log(title.getAttribute('class'));
title.setAttribute('class','new class')
console.log(title.getAttribute('class'));

// CLASS
classTitle = title.classList;
classTitle.add("main-title");
console.log(classTitle);
classTitle.add("other-class");
console.log(classTitle);

if(classTitle.contains("other-class")){
    classTitle.remove("other-class");
    console.log(classTitle);
}else{
    classTitle.add("other-class");
    console.log(classTitle);
}

classTitle.replace("main-title","second-title");
console.log(classTitle);

// DIRECT ATTRIBUTES
// TODO: Hay elementos que se pueden apreciar directamente del DOM
console.log(title.id);
console.log(title.innerHTML); // -> Este devuelve el codigo dentro de la etiqueta
console.log(title.textContent); // -> Este devuelve el texto plano dentro de la etiqueta
console.log(name.value);
