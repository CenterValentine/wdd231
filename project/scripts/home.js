const headerobjs = document.querySelector('#header');

window.addEventListener('scroll', function() {
    // Use forEach to loop through each element in the NodeList
    // headerobjs.forEach(function(element) {
    console.log(window.scrollY);
        if (window.scrollY > 5) {
            headerobjs.classList.add('scrolled');
        } else {
            headerobjs.classList.remove('scrolled');
        }
    });
// });
