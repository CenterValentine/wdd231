import { getRooms } from './fetch-rooms.js';
const roomErrorContainer = document.querySelector('.room-error-container');

// random price function (between 50 and 150)

if (window.location.pathname.includes('/project/rooms.html')) {
let searchFormSubmit = document.querySelector('#search-form-submit');

searchFormSubmit.addEventListener('click', function (event) {
    event.preventDefault();
    const arrival = document.getElementById('arrival').value;
    const departure = document.getElementById('departure').value;

    console.log("arrival: ", arrival, "departure: ", departure);
    let dates = getDates(arrival, departure);
// }
    roomLoader(dates,false);
    
});
}

function getDates(arrival,departure){
    // dates are from form date inputs
    let arrivalDate = new Date(arrival);
    let departureDate = new Date(departure);
    // let dates = [arrivalDate, departureDate];
// this produces false value to emulate a verification of room availability

    let randomBoolean = Math.random() >= 0.5;
    console.log("randomBoolean: ", randomBoolean);
    // future use will return a list of room ids that are available
    let roomsAvailable = randomBoolean > 0.5 ? true : false;

    
        return [arrivalDate, departureDate, roomsAvailable];}


    


function randomPrice() {
    return Math.floor(Math.random() * 100) + 50;
}

// const sliderWrapper = document.querySelector('.slider-wrapper');
// const sliderWrappers = document.querySelectorAll('.slider-wrapper');
// const backButton = document.querySelector('.back-button');
// const forwardButton = document.querySelector('.forward-button');
// const slides = document.querySelectorAll('.slider-wrapper img');
// console.log("slides: ",slides);
// let currentIndex = 0;
// let currentIndices = Array.from(sliderWrappers, () => 0);
// console.log("currentIndex: ",currentIndex);


// backButton.addEventListener('click', function (event) {
//     console.log("backButton clicked");
//     currentIndex = (currentIndex - 1) % slides.length; 
//     imageSlider();
//     // const imageContainer = event.target.closest('.glider.carousel');
//     // console.log(imageContainer);

// });

// forwardButton.addEventListener('click', function (event) {
//     console.log("forwardButton clicked");
//     currentIndex = (currentIndex + 1) % slides.length;
//     imageSlider();


//     // const imageContainer = event.target.closest('.glider.carousel');
//     // console.log(imageContainer);
// });


// function imageSlider(sliderWrapper, currentIndex) {
//     const offset = -currentIndex * 95;
//     sliderWrapper.style.transform = `translateX(${offset}%)`;
// }

function sortbyprice() {
const cardContainers = Array.from(document.querySelectorAll('.card-container'));

// if (cardContainers) {
    const sortedCards = cardContainers.map(cardContainer => ({
element: cardContainer,
price: parseFloat(cardContainer .querySelector('.price-filter-target').textContent)
    })).sort((a, b) => a.price - b.price);


const roomsResultsContainer = document.querySelector('.rooms-results-container');
roomsResultsContainer.innerHTML = ''; 
sortedCards.forEach(card=> roomsResultsContainer.appendChild(card.element));

// }
}

const priceFilter = document.querySelector('.filter.price-filter');
const amenityFilter = document.querySelector('.filter.ammenities-filter') || false;
const allFilter = document.querySelector('.filter.all-filter');


if (priceFilter || amenityFilter || allFilter) {
    // console.log("Filters loaded");

priceFilter.addEventListener('click', function (event) {
    console.log("Price filter clicked");
    // const priceFilter = event.target;
    sortbyprice();

allFilter.addEventListener('click', function (event) {
console.log("All filter clicked");
roomLoader(false,true);


});

});

// amenityFilter.addEventListener('click', function () {
//     console.log("Amenity filter clicked");
//     // const amenityFilter = event.target;

// });

allFilter.addEventListener('click', function (event) {
    // console.log("All filter clicked");
    // const allFilter = event.target;

});}

function dateValidation (arrival, departure) {
    let currentDate = new Date();
    // console.log("currentDate: ", currentDate, "arrival: ", arrival, "departure: ", departure);
    if (arrival < currentDate) {
        roomErrorContainer.textContent = 'Invalid date selection. Please select a future date range.'
        return false;
    } else if (departure < arrival) {
            roomErrorContainer.textContent = 'Invalid date selection. Please select a departure date after the arrival date.'
            return false;
        }
        else {
            return true;}
}

function roomLoader(dates,override=false) {
    let roomFilters = document.querySelector('.filter-options-container');
    
    roomErrorContainer.textContent = '';
    const roomsResultsContainer = document.querySelector('.rooms-results-container');

console.log("dates: ", dates);
if (dateValidation(dates[0],dates[1]) || override) {


roomFilters.classList.remove('hide-filter');

    roomsResultsContainer.innerHTML = '';
    getRooms().then(roomsData => {
        // console.log("Rooms data loaded:", roomsData); 
//<a href="">View room details →</a>
        let roomsIndex = 0;
        roomsData.forEach(roomData => {
            // console.log("Processing room:", roomData.title);

            let cardContainer = document.createElement('div');
            cardContainer.setAttribute('class', 'card-container flex');
            

            let containerSpacer = document.createElement('div');
            containerSpacer.setAttribute('class', 'container-spacer rooms-results-container');
            let dialog = document.createElement('dialog');
            
            let pathMiddle = '/project/'
            let bookRoomUrl = `${window.location.origin}${pathMiddle}book.html?room=${roomData.id}&arrival=${dates[0]}&departure=${dates[1]}`;

            let cardTemplate = `<div class="image-gallery-container">
                            <div class="image-gallery-component">
                                <div class="glider carousel">
                                    <button type="button" class="carousel-button back-button">
                                        <p class="left-arrow arrow">
                                            < </p>
                                    </button>
                                    <button type="button" class="carousel-button forward-button">
                                        <p class="right-arrow arrow"> ></p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="text-container flex">
                            <div class="content-details flex">
                                <div class="room-title-ammenities">
                                    <div class="room-title room-info">
                                        <h2>${roomData.title}</h2>
                                    </div>
                                    <div class="room-ammenities room-info">
                                    </div>
                                </div>
                                <div class="room-description room-info">
        ${roomData.description}
                                </div>
                                <div class="room-direct room-info">
                                    
                                </div>
                            </div>
                            <div class="content-footer">
                                <div class="horizontal-line"></div>
                                <div class="content-room-price flex">
                                    <span class="price-filter-target">${randomPrice()    ||roomData.price || '95'} </span><span>USD/Night</span><a href="${bookRoomUrl}"><button class="book-now">Book Now</button></a>
                                </div>
                            </div>
                        </div>`



            cardContainer.innerHTML = cardTemplate;

            let highResImageData = roomData.high_res_images;
            let lowResImageData = roomData.low_res_images;
            let imageContainer = document.createElement('div');
            imageContainer.setAttribute('class', 'slider-wrapper');


            let imageIndex = 0;
            lowResImageData.forEach(image => {
                let imageId = image.id
                let xetaImageUrl = image.url;
                // let xetaImageUrl = `https://us-east-1.storage.xata.sh//images/rooms/${imageId}.jpg`;

                let imageTag = document.createElement('img');
                imageTag.setAttribute('src', xetaImageUrl);
                imageTag.setAttribute('alt', image.name);
                imageTag.setAttribute('width', '325');
                if (imageIndex === 0 && roomsIndex <= 3) {
                    imageTag.setAttribute('loading', 'eager');
                } else {
                    imageTag.setAttribute('loading', 'lazy');
                }
                
                imageContainer.appendChild(imageTag); 
                imageIndex++;
            });

            // incomplete
            let roomAmenitiesContainer = document.createElement('div');
            roomAmenitiesContainer.setAttribute('class', 'flex svg-container');
            let roomAmenitiesData = roomData.amenities;
            roomAmenitiesData.forEach(amenityData => {
                let amenityTag = document.createElement('div');
// ".id", ".name", ".svg"
                amenityTag.setAttribute('class', 'amenity');
                amenityTag.setAttribute('id', amenityData.id);
                amenityTag.setAttribute('title', amenityData.name);
                amenityTag.innerHTML = `${amenityData.svg}`;
                // ${amenityData.name}
                // amenityTag.textContent = ;
                // let svgTag = document.createElement('svg');
                // amenityTag.querySelector('svg').setAttribute('alt', amenityData.name);

                // amenityTag.appendChild(svgTag);
                roomAmenitiesContainer.appendChild(amenityTag);
            })

            cardContainer.querySelector('.glider.carousel').appendChild(imageContainer);
            cardContainer.querySelector('.room-ammenities').appendChild(roomAmenitiesContainer);

            roomsResultsContainer.append(cardContainer);
            // console.table(roomData);
            
        const slides = imageContainer.querySelectorAll('img');
        imageContainer.style.width = `${slides.length * 100}%`;
        let currentIndex = 0;

        // Who knew adding event listeners to each back and forward button creation was possible?!?!
        const backButton = cardContainer.querySelector('.back-button');
        const forwardButton = cardContainer.querySelector('.forward-button');

        // console.log("Back and forward buttons created for:", roomData.title);

        backButton.addEventListener('click', () => {
            console.log("Back button clicked for:", roomData.title)
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlider(imageContainer, currentIndex);
        });

        forwardButton.addEventListener('click', () => {
            console.log("Forward button clicked for:", roomData.title)
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlider(imageContainer, currentIndex);
        });

        function updateSlider(sliderWrapper, index) {
            const offset = -index * 100;
            sliderWrapper.style.transform = `translateX(${offset}%)`;
        }
        roomsIndex++;

        });

        


    });



} else {

    roomFilters.classList.add('hide-filter');
    // console.log("No rooms available for selected dates");
    roomsResultsContainer.innerHTML = '<h2>No rooms available for selected dates. Try a different date range.</h2>';


}


}
