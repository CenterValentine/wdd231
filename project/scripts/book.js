
console.log(`running path ${window.location}`);

const bookerStart = document.getElementById("booker-start")
const booker = document.getElementById("booker");
const currentUrl = window.location.href;


function show(value) {
    const urlContent = currentUrl.split('?');
    let formData = urlContent[1].split('&');
    if (value) {
        for (let element of formData) {
            if (element.startsWith(value)) {
                let result = element.split('=')[1].replace("%40", '@');
                // if result is an ISOtimestamp (ie 2024-10-17T15%3A03%3A19.277Z), convert it to a date
                if (result.includes('%3A')) {
                    let date = new Date(result.replace(/%3A/g, ':').replace(/%2F/g, '/').replace(/%40/g, '@'));
                    date = date.toString().replace(/GMT-[0-9]{4}/g, '')
                    // replace between dd\w.*\w ...dd:dd:dd\wGMT-0600\w(Mountain Daylight Time) with space
                    console.log("date: ", date);
                    return date;
                }
                if (result) {
                    console.log("show return: ", result);
                    return (result);
                }
            }
        }
    }
}


function loadRoom(room,arrival,departure) {return null}

// find if query string contains room

if (currentUrl.includes('?') && currentUrl.includes('room=') && currentUrl.includes('arrival=') && currentUrl.includes('departure=')) {
    bookerStart.classList.toggle('hide-booker');
    
    let room = show('room');
    let arrival = show('arrival');
    let departure = show('departure');
    loadRoom(room,arrival,departure);

} else {
    booker.classList.toggle('hide-booker');

    
    // booker.innerHTML = `<section id="booker">
    //         <div class="flex">
    //             <div class="catchphrase">
    //                 <h1>BOOK YOUR STAY</h1>
    //             </div>
    //             <div class="flex">
    //                 <form id="homeForm" class="flex">
    //                     <label>
    //                         <p>Rooms</p><br>
    //                         <select id="rooms" name="rooms" required>
    //                             <option value="" disabled selected>Select a Room</option>
                                
    //                         </select><br>
    //                         <a class="hints" href="rooms.html"><i>Explore our rooms</i></a>
    //                     </label>
    //                     <label class="form-arrival">
    //                         <p>Arrival</p><br />
    //                         <input id="arrival" type="date" name="arrival" required />
    //                     </label>
    //                     <p id="dash">-</p>
    //                     <label class="form-departure">
    //                         <p>Departure</p><br />
    //                         <input id="departure" type="date" name="departure" required />
    //                     </label>
    //                 </form>
    //                 <button id="homeFormSubmit" class="book-now"><b>Book Now</b></button>
    //             </div>
    //         </div>
    //     </section>`
};