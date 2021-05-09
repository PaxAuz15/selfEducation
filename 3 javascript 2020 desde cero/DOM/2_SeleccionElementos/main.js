// document.getElementById('ID_DEL_ELEMENTO');
// document.querySelector('selectorCSS'); ->Accede al primer elemento que coincida con el selector CSS
// document.querySelectorAll('selectorCSS'); ->Accede a todos los elementos que coincidan con el selector CSS. Devuelve un FIXME:NODELIST

const title = document.getElementById('title');
console.log(title);
console.dir(title);

const paragraph = document.querySelector('.paragraph');
console.log(paragraph)
console.dir(paragraph)
// paragraph.textContent = 'Holiwis'

const allParagraph = document.querySelectorAll('.paragraph');
console.log(allParagraph);
console.log(typeof(allParagraph))


// TODO: Convert NodeList to Array
const allParagraphSpreadOperator = [...document.querySelectorAll('paragraph')];
console.log(typeof(allParagraphSpreadOperator));

const allParagraphArray = Array.from(document.querySelectorAll('.paragraph'));
console.log(typeof(allParagraphArray));