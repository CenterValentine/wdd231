
const cards = document.querySelector('#cards');
const toggleSwitch = document.getElementById('toggleSwitch');

async function getJSONData() {
    const response = await fetch('./data/members.json');

    const data = await response.json();
    console.table(data.businesses);
    displaybusinesses(data.businesses);
    return data.businesses;
}

async function displaybusinesses(directory) {
    console.log("Directory: ", directory);
    directory.forEach((directory) => {
        const card = document.createElement('div');

        const businessName = document.createElement('h2');
        const industry = document.createElement('p');
        const address = document.createElement('address');
        const phone = document.createElement('p');
        const bizImage = document.createElement('img');
        const pageBreak = document.createElement('br');
        const website = document.createElement('a');
        const businessSpecs = document.createElement('div')
        // const anchor = document.createElement('a');
        // const items = [industry, address, phone, bizImage, website]

        website.textContent = `Visit Website (${directory.website})`;

        businessName.textContent = `${directory.name}`;
        industry.textContent = `${directory.industry}`;
        address.textContent = `${directory.address}`;
        phone.textContent = `${directory.phone}`;

        website.setAttribute('href', directory.website)
        bizImage.setAttribute('src', directory.image);
        bizImage.setAttribute('alt', `Image of ${directory.name}`);
        bizImage.setAttribute('height', '160px');
        bizImage.setAttribute('loading', 'lazy');

        card.setAttribute('class', 'card home-card flex')
        industry.setAttribute('class', 'industry');
        phone.setAttribute('class', 'phone');
        // anchor.setAttribute('class', 'website');
        businessSpecs.setAttribute('class', 'toggler')

        // website.appendChild(anchor);

        businessSpecs.append(industry, address, phone, bizImage, pageBreak, website)
        card.append(businessName, businessSpecs);
        cards.appendChild(card);
    });
}

function changeView() {

}

directoryData = getJSONData();

toggleSwitch.addEventListener('change', function () {
    console.log('click')
    const togglers = document.querySelectorAll('.toggler');
    // sets list else grid
    if (this.checked) {
        cards.style.flexDirection = 'column';
        togglers.forEach(toggler => {
            toggler.classList.add('hide'); 
        });
    } else {
        cards.style.flexDirection = 'row';
        togglers.forEach(toggler => {
            toggler.classList.remove('hide'); 
        });
    }

})
