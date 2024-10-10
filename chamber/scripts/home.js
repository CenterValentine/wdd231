const cards = document.querySelector('.cards');
const toggleSwitch = document.getElementById('toggleSwitch');

async function getJSONData() {
    const response = await fetch('/chamber/data/members.json');

    const data = await response.json();
    console.table(data.businesses);
    displaybusinesses(data.businesses);
    return data.businesses;
}

async function displaybusinesses(directory) {
    console.log("Directory: ", directory);
    directory.forEach((directory) => {
        if (directory.membership == 1) {

            const card = document.createElement('div');

            const cardHeadHeader = document.createElement('h2');
            const cardHeadTagline = document.createElement('p');
            const cardhrline = document.createElement('hr');

            const image = document.createElement('img');
            const Email = document.createElement('p');
            const phone = document.createElement('p');
            const website = document.createElement('a');
            const websitep = document.createElement('p');
            websitep.append(website);

            const cardHead = document.createElement('div');
            cardHead.append(cardHeadHeader, cardHeadTagline, cardhrline);

            const cardContentimageDiv = document.createElement('div');
            cardContentimageDiv.append(image);

            const cardContentDiv = document.createElement('div');
            cardContentDiv.append(Email, phone, websitep);

            const cardContent = document.createElement('div');
            cardContent.append(cardContentimageDiv, cardContentDiv);



            // const items = [industry, address, phone, bizImage, website]
            cardContent.setAttribute('class', 'promoCardContent flex');
            cardHead.setAttribute('class', 'promoCardhead flex');
            cardContentimageDiv.setAttribute('class', 'flex');
            cardContentDiv.setAttribute('class', 'flex');

            image.src = directory.image;
            image.alt = `Image of ${directory.name}`;
            image.setAttribute('width', '150px');
            // image.setAttribute('height', '200px');
            image.setAttribute('loading', 'lazy');

            cardHeadHeader.textContent = `${directory.name}`;
            cardHeadTagline.textContent = `${directory.catchphrase}`;

            Email.textContent = `Email: ${directory.email}`;
            phone.textContent = `Phone ${directory.phone}`;
            website.textContent = `URL: ${directory.website}`;
            // website.href = directory.website;
            website.setAttribute('href', directory.website)

            card.setAttribute('class', 'card cardStyle flex')

            card.append(cardHead, cardContent);

            cards.appendChild(card);
        }
    });
}

function changeView() {

}

directoryData = getJSONData();
