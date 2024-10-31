import { getRooms } from './fetch-rooms.js';


const sliderWrapper = document.querySelector('.slider-wrapper');
const backButton = document.querySelector('.back-button');
const forwardButton = document.querySelector('.forward-button');
const slides = document.querySelectorAll('.slider-wrapper img');
console.log("slides: ",slides);
let currentIndex = 0;
console.log("currentIndex: ",currentIndex);


backButton.addEventListener('click', function (event) {
    currentIndex = (currentIndex - 1) % slides.length; 
    imageSlider();
    // const imageContainer = event.target.closest('.glider.carousel');
    // console.log(imageContainer);

});

forwardButton.addEventListener('click', function (event) {
    currentIndex = (currentIndex + 1) % slides.length;
    imageSlider();


    // const imageContainer = event.target.closest('.glider.carousel');
    // console.log(imageContainer);
});


function imageSlider() {
    const offset = -currentIndex * 95;
    sliderWrapper.style.transform = `translateX(${offset}%)`;
}

const roomsResultsContainer = document.querySelector('.rooms-results-container');

    getRooms().then(roomsData => {
        // console.log("Data", rooms);
        console.log("roomsData", roomsData);

        roomsData.forEach(roomData => {
            console.log(roomData);
            let cardContainer = document.createElement('div');
            cardContainer.setAttribute('class', 'card-container flex helo');
            let containerSpacer = document.createElement('div');
            containerSpacer.setAttribute('class', 'container-spacer rooms-results-container');
            let dialog = document.createElement('dialog');
            
            let highResImageData = roomData.high_res_images;
            let lowResImageData = roomData.low_res_images;
            let imageContainer = document.createElement('div');
            imageContainer.setAttribute('class', 'slider-wrapper flex');

            highResImageData.forEach(image => {
                let imageId = image.id
                let xetaImageUrl = `https://us-east-1.storage.xata.sh//images/rooms/${imageId}.jpg`;

                let imageTag = document.createElement('img');
                imageTag.setAttribute('src', xetaImageUrl);
                imageTag.setAttribute('alt', image.name);
                imageTag.setAttribute('width', '425');
                imageTag.setAttribute('loading', 'lazy');
                imageContainer.appendChild(imageTag); 
            });
            let title = roomData.title;
            let description = roomData.description;
            let price = roomData.price || '95';

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
                                        <h2>${title}</h2>
                                    </div>
                                    <div class="room-ammenities room-info">
                                    </div>
                                </div>
                                <div class="room-description room-info">
        ${description}
                                </div>
                                <div class="room-direct room-info">
                                    View room details →
                                </div>
                            </div>
                            <div class="content-footer">
                                <div class="horizontal-line"></div>
                                <div class="content-room-price flex">
                                    <span>${price} </span><span>USD/Night</span><button>View Rates</button></span>
                                </div>
                            </div>
                        </div>`



            cardContainer.innerHTML = cardTemplate;

            cardContainer.querySelector('.glider.carousel').appendChild(imageContainer);
            cardContainer.querySelector('.room-ammenities').appendChild(roomAmenitiesContainer);

            roomsResultsContainer.appendChild(cardContainer);
            // console.table(roomData);
        });

        


    });



    
