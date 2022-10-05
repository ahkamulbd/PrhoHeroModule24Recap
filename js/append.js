const placeList = document.getElementById('places-list');

const newLi = document.createElement('li');
newLi.innerText = 'Pahartoliban';
placeList.appendChild(newLi);

const anotherLi = document.createElement('li');
anotherLi.innerText = 'Modhuban';
placeList.appendChild(anotherLi);

/*-----------------------------------------
        Adding Section in Main Container
---------------------------------------------*/

const mainContainer = document.getElementById('main-container');

const addNewSection = document.createElement('section');
const newH1 = document.createElement('h1');
newH1.innerText = 'My Food List';
addNewSection.appendChild(newH1);

const newUl = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Biriyani';
newUl.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Khashir Rejala';
newUl.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Sobji Salad';
newUl.appendChild(li3);

addNewSection.appendChild(newUl);

mainContainer.appendChild(addNewSection);

// Adding Other Section directly

const addDressSection = document.createElement('section');
addDressSection.innerHTML = `
    <h1>My Dress Section</h1>
    <ul>
        <li>T-shirt</li>
        <li>Polo Shirt</li>
        <li>Sports Shorts</li>
    </ul>
`
mainContainer.appendChild(addDressSection);
