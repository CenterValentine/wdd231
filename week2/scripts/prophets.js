const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json'
const cards = document.querySelector('#cards');

async function getProphetData(){
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data);
    console.table(data.prophets);
    displayProphets(data.prophets);
    return data.prophets;

}

async function displayProphets(prophets) {
    console.log(prophets);
    prophets.forEach((prophet) =>{
        const card = document.createElement('section');

        const fullName = document.createElement('h2');
        const portrait = document.createElement('img');
        const birthDate = document.createElement('p');
        const birthPlace = document.createElement('p');
        fullName.textContent =  `${prophet.name} ${prophet.lastname}`;
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200');
        portrait.setAttribute('height', '200');
        
        card.setAttribute('class', 'pcard');
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);
        
        cards.appendChild(card);
    });
}

prophetData = getProphetData(url);
