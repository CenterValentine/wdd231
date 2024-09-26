allFilter = document.querySelector('.all-filter');
cseFilter = document.querySelector('.cse-filter');
wddFilter = document.querySelector('.wdd-filter');
courses = document.querySelectorAll('.course');

allFilter.addEventListener('click', () => {
    courses.forEach(course => {
        course.style.display = 'block';
    });
});

cseFilter.addEventListener('click', () => {

courses.forEach(course => {
    if(course.value !== 'cse') {
        course.style.display = 'none';
    }});

});