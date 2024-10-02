
filters = document.querySelector('#filters');

cards = document.querySelector('#certificates-course-boxes');
numberOfCreditsItem = document.querySelector('#numberOfCredits');
hamburger = document.querySelector('#hamburger')
let menu = document.querySelector('#menu')


const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }

]

loadCourses();


function updateNumberOfCredits(countedCredits) {
    console.log('Updating count: ', countedCredits)
    numberOfCreditsItem.textContent = countedCredits
}

function loadCourses(event) {
    let numberOfCredits = 0;
    console.log("event: ", event);
    courses.forEach(course => {
        let card = document.createElement('div')
        // console.log(card);
        numberOfCredits += course.credits;
        console.log()
        card.setAttribute('data-course-credits', course.credits);
        card.textContent = `${course.subject} ${course.number}`;
        if (course.completed) {
            card.setAttribute('class', 'course card-Completed');
        }
        else {
            card.setAttribute('class', 'course card-Incomplete');
        }
        cards.appendChild(card);
    });
    updateNumberOfCredits(numberOfCredits);
};

function refreshCourses(id) {
    let numberOfCredits = 0;
    console.log("cards", cards);
    var courseCards = cards.querySelectorAll('.course');
    console.log(courseCards)
    courseCards.forEach((card) => {

        console.log('card: ', card);
        console.log('card Content: ', card.textContent);
        // console.log('card Course Credits: ', card.getAttribute('data-course-credits'));
        let subject = card.textContent.match(/\w\w\w/);
        switch (id) {
            case 'All':
                card.classList.remove('hide-card')
                numberOfCredits += parseInt(card.getAttribute('data-course-credits'));
                break;
            case 'CSE':
                if (id != subject) {
                    card.classList.toggle('hide-card')
                } else {
                    numberOfCredits += parseInt(card.getAttribute('data-course-credits'));
                    card.classList.remove('hide-card')
                }
                break;
            case 'WDD':
                if (id != subject) {
                    card.classList.toggle('hide-card')
                } else {
                    numberOfCredits += parseInt(card.getAttribute('data-course-credits'));
                    card.classList.remove('hide-card')
                }
                break;
        };
    });
    updateNumberOfCredits(numberOfCredits);
};


filters.addEventListener('click', (event) => {
    refreshCourses(event.target.textContent)
});

hamburger.addEventListener('click', (event) => {

    console.log("hamburger.textContent: ", hamburger.textContent)
    switch (hamburger.textContent) {
        case "≡":
            hamburger.textContent = "x";
            menu.classList.remove('hide');
            break;
        case "x":
            hamburger.textContent = "≡";
            menu.classList.add('hide');
            break;
    }



});


