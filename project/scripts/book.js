
console.log(`running path ${window.location}`);

const booker = document.getElementById("booker")




if (booker) {
    booker.innerHTML = `<div class="flex">
            <div class="catchphrase">
                <h1>BOOK YOUR STAY</h1>
            </div>
            <div class="flex">
                <form id="homeForm" class="flex">
                <label><p>Rooms</p><br>
                    <select id="rooms" name="rooms" required>
                        <option value="" disabled selected>Select Room</option>
                    <option value="standard">Standard</option>
                    <option value="deluxe">Deluxe</option>
                    <option value="economy">Economy</option>
                    </select><br>
                    <a class="hints" href="rooms.html"><i>Explore our rooms</i></a>
                    </label>
                    <label class="">
                    <p>Arrival</p><br />
                    <input id="arrival" type="date" name="arrival" required/>
                    </label>
                    <p id="dash">-</p>
                    <label>
                    <p>Departure</p><br />
                    <input id="departure" type="date" name="departure" required/>
                    </label>
                </form>
                <button id="homeFormSubmit" class="book-now"><b>Book Now</b></button>
          </div>
        </div>`
};