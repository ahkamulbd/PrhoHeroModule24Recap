//console.log('Hello DOM');
//console.log(document);
//console.log(document.body);
//console.log(document.body.main);

const student = {
    name: 'Amima Hoque',
    class: 2,
    shoeColor: 'white',
    numberOfBooks: 3,
    study: function (time) {
        //console.log(time, 'study kortese');
    }
}

// Option 1: TagName

const liCollection = document.getElementsByTagName('li');
for (const li of liCollection) {
    //console.log(li);
    //console.log(li.innerText);
}

const allHeadings = document.getElementsByTagName('h1');
for (const h1 of allHeadings) {
    //console.log(h1.innerText);
}

// Option 2: ClassName

const places = document.getElementsByClassName('important-places');
for (const place of places) {
    //console.log(place.innerHTML);
}

// Option 3: Id

const fruitsTitle = document.getElementById('fruits-title');
fruitsTitle.innerText = 'Fruits Title Changed by JS';

const otherPlace = document.getElementsByClassName('other-place');
otherPlace.innerText = 'Shalban Jabo Na';


// Option 4: querySelectorAll / querySelector


const someLi = document.querySelector('.fruits-container li');
//console.log(someLi);
for (const li of someLi) {
    console.log(li.innerText);
}