const sections = document.querySelectorAll('section');
//console.log(sections);
for (const section of sections) {
    section.style.border = '2px solid lightblue';
    section.style.margin = '10px';
    section.style.padding = '10px';
    section.style.borderRadius = '15px';
    section.style.backgroundColor = 'lightgray'
}

const placesContainer = document.getElementById('places-container');
placesContainer.style.backgroundColor = 'yellow';

placesContainer.classList.add('font-size');

placesContainer.classList.remove('large-text');