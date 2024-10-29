
const roomResultsContainer = document.querySelectorAll('.rooms-results-container');

// listen for .back-button or .forward-button click
roomResultsContainer.forEach((roomCard) => {

    roomCard.addEventListener('click', (event) => {
        const target = event;
        console.log('target: ', target);
    })

})
;
