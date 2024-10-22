const discoverMessage = document.querySelector('.discover-greeting');



window.addEventListener('load', function (event) {
    console.log("Page loaded");
// check local storage for timestamp

    let lastVisit = localStorage.getItem("lastVisit");

    console.log(lastVisit);

    if (!lastVisit) { 
        discoverMessage.textContent = "Welcome! Let us know if you have any questions";
        localStorage.setItem("lastVisit", Date.now());
    } else if (lastVisit && Date.now() - lastVisit < 86400000) {
        discoverMessage.textContent = "Back so soon! Awesome!"
    } 
    else if (lastVisit && Date.now() - lastVisit > 86400000) {
        let daysSinceLastVisit = Math.floor((Date.now() - lastVisit) / 86400000);
        if (daysSinceLastVisit > 1) {
            plural = "s";
        }
        discoverMessage.textContent = `You last visited ${daysSinceLastVisit} day${plural} ago.`;
    }

    // localStorage.setItem("timestamp", Date.now());} 
    // else if (Date.now() - timestamp < 86400000) {discoverMessage.textContent = "Welcome! Let us know if you have any questions";
    // } else {
    //     let daysSinceLastVisit = Math.floor((Date.now() - timestamp) / 86400000);
    //     discoverMessage.textContent = `You last visited ${daysSinceLastVisit} days ago.`;
    // }
});
