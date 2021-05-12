const days = ['Monday','Tuesday','Wednesday','Thursday','Friday'];

const title = document.getElementById('title');
const daysList = document.getElementById('daysList');
const daysSelect = document.getElementById('daysSelect');
const body = document.getElementById('body');

const paragraphSpam = document.createElement('p');
paragraphSpam.innerHTML = 'Hello World from <span>JS</span>';
body.appendChild(paragraphSpam);

const paragraphWHSpam = document.createElement('p');
paragraphWHSpam.textContent = 'Hello World without spam';
body.appendChild(paragraphWHSpam);

// TODO: When insert a lot of elements html on DOM. Use fragment
const fragmentWeek = document.createDocumentFragment();

for (let day of days){
    const listday = document.createElement('li');
    listday.textContent += day;
    fragmentWeek.appendChild(listday);
}

daysList.appendChild(fragmentWeek);

const selectionFragment = document.createDocumentFragment();

for (let day of days){
    const optionDay = document.createElement('option');
    optionDay.setAttribute('value',day.toLocaleLowerCase());
    optionDay.textContent += day;
    selectionFragment.appendChild(optionDay);
}

daysSelect.appendChild(selectionFragment);