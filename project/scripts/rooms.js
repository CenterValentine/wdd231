import { getRooms } from './fetch-rooms.js';

const backButton = document.querySelector('.back-button');
const forwardButton = document.querySelector('.forward-button');




backButton.addEventListener('click', function (event) {

    const imageContainer = event.target.closest('.glider.carousel');
    console.log(imageContainer);

});

forwardButton.addEventListener('click', function (event) {

    const imageContainer = event.target.closest('.glider.carousel');
    console.log(imageContainer);
});


function imageSlider(element,direction) {


}

const roomsResultsContainer = document.querySelector('.rooms-results-container');

    getRooms().then(roomsData => {
        // console.log("Data", rooms);
        console.log("roomsData", roomsData);

        roomsData.forEach(roomData => {
            let cardContainer = document.createElement('div');
            cardContainer.setAttribute('class', 'card-container flex helo');
            let containerSpacer = document.createElement('div');
            containerSpacer.setAttribute('class', 'container-spacer rooms-results-container');
            let dialog = document.createElement('dialog');
            
            let imageData = roomData.images;
            let imageContainer = document.createElement('div');
            imageContainer.setAttribute('class', 'slider-wrapper flex');
            imageData.forEach(image => {
                let imageTag = document.createElement('img');
                imageTag.setAttribute('src', image.url);
                imageTag.setAttribute('alt', image.name);
                imageTag.setAttribute('height', '340');
                imageTag.setAttribute('loading', 'lazy');
                imageContainer.appendChild(imageTag); 
            });
            let title = roomData.title;
            let description = roomData.description;
            let price = roomData.price || '95';

            // incomplete
            let roomAmenitiesContainer = document.createElement('div');
            let roomAmenitiesData = roomData.amenities;
            roomAmenitiesData.forEach(amenityData => {
                let amenityTag = document.createElement('div');
// ".id", ".name", ".svg"
                amenityTag.setAttribute('class', 'amenity');
                amenityTag.setAttribute('id', amenityData.id);

                let svgTag = document.createElement('img');
                svgTag.setAttribute('src', amenityData.svg);
                svgTag.setAttribute('alt', amenityData.name);
                // console.log(amenityData);

                amenityTag.appendChild(svgTag);
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
        ${roomAmenitiesContainer}
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

            roomsResultsContainer.appendChild(cardContainer);
            // console.table(roomData);
        });

        


    });

