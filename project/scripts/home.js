const headerobjs = document.querySelector('#header');
const logoDescription = document.querySelector('#logo-description');
const currentUrl = window.location.href;
console.log("currentUrl: ", currentUrl);

window.addEventListener('scroll', function() {

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
