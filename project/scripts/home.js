import { getRooms } from './fetch-rooms.js';
const headerobjs = document.querySelector('#header');
const logoDescription = document.querySelector('#logo-description');
const currentUrl = window.location.href;
console.log("currentUrl: ", currentUrl);

window.addEventListener('scroll', function() {
console.log("currentUrl: ", currentUrl);
    if (currentUrl.includes('home','book','about')){
    // Use forEach to loop through each element in the NodeList
    // headerobjs.forEach(function(element) {
    console.log(window.scrollY);
        if (window.scrollY > 5) {
            headerobjs.classList.add('scrolled');
            logoDescription.classList.add('scrolled');
        } else {
            headerobjs.classList.remove('scrolled');
            logoDescription.classList.remove('scrolled');
        }
    }});



    getRooms().then(roomsData => {
        // console.log("Data", rooms);
        console.log("roomsData", roomsData);

        roomsData.forEach(roomData => {

            let option = document.createElement('option');
            option.value = roomData.id;
            option.text = roomData.title;

            rooms.appendChild(option);
            // console.table(roomData);
        });
        rooms = roomOptions;
    });