const list = document.getElementById('list');
const nel = document.createElement('li');
nel.textContent = 'New Reference';

// list.insertBefore(nel,list.firstElementChild);
// list.insertBefore(nel,list.lastElementChild);
// list.insertBefore(nel,list.lastElementChild[-1]);


// list.children[0].insertAdjacentElement('beforebegin',nel);
// list.insertAdjacentElement('afterbegin',nel)
// list.insertAdjacentElement('beforeend',nel)
// list.children[0].insertAdjacentElement('afterend',nel)

// TODO: Apply all position to insertAdjacentElement
// list.insertAdjacentHTML('afterbegin','<li>Hola mundo</li>')

// TODO: Apply all position to insertAdjacentElement
// list.insertAdjacentText('afterbegin','Holiwis')

// list.replaceChild(nel,list.children[0])

// list.children[0].before(nel)
// list.prepend(nel)
// list.append(nel)


let number = 0;
for (let element in list.children){
    if(number <(list.children.length-1)){
        number = Number(element);
    }
}

// list.children[number].after(nel)

list.children[number].replaceWith(nel)
const firstClone = list.cloneNode(true)
const secondClone = firstClone.cloneNode(true)
list.after(firstClone)
firstClone.after(secondClone)

try {
    secondClone.remove();
    console.log(`Deleted second clone -> ${secondClone}`);
} catch (error) {
    console.log(`Couldn't remove second clone -> ${secondClone}`);
}

try {
    firstClone.removeChild(firstClone.children[number]);
    console.log(`Deleted second clone -> ${firstClone}`);
} catch (error) {
    console.log(`Couldn't remove second clone -> ${firstClone}`);
}
