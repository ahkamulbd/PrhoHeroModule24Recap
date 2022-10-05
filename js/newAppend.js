const bodyContainer = document.getElementById('body-container');

const addHeader = document.createElement('header');
bodyContainer.appendChild(addHeader);

const newH1 = document.createElement('h1');
newH1.innerText = 'Adding HTML Elements with DOM';
addHeader.appendChild(newH1);

// Adding main

const addMain = document.createElement('main');

bodyContainer.appendChild(addMain);

// Adding section to main

const addSection = document.createElement('section');
addMain.appendChild(addSection);

const newH2 = document.createElement('h1');
newH2.innerText = 'This is new Book List';
addSection.appendChild(newH2);

const newUl = document.createElement('ul');
addSection.appendChild(newUl);

const li1 = document.createElement('li');
li1.innerText = 'Joddopi Amar Guru';
newUl.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Gavi Brittanto';
newUl.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Bangali Musulmaner Mon';
newUl.appendChild(li3);

// Adding other Section

const addOtherSection = document.createElement('section');
addMain.appendChild(addOtherSection);

const addNewH1 = document.createElement('h1');
addNewH1.innerText = 'Book Details';
addOtherSection.appendChild(addNewH1);

const addTable = document.createElement('table');
addTable.innerHTML = `
        <thead>
            <tr>
                <th>S/L</th>
                <th>Book Name</th>
                <th>Author Name</th>
                <th>Price</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>1</td>
                <td>Joddopi Amar Guru</td>
                <td>Ahmed Sofa</td>
                <td>300</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Grabon Megher Din</td>
                <td>Homayun Ahmed </td>
                <td>270</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Je Jole Jibon Jole</td>
                <td>Samia Rahman </td>
                <td>200</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Wealth of Nation</td>
                <td>Adam Smith </td>
                <td>340</td>
            </tr>
            <tr>
                <td>5</td>
                <td>General Theory</td>
                <td>Alfred Marshal </td>
                <td>370</td>
            </tr>
        </tbody>
`
addOtherSection.appendChild(addTable);

addTable.style.color = 'white';
addTable.style.backgroundColor = 'gray';
