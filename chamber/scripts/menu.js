let hamburger = document.querySelector('#hamburger')
let menu = document.querySelector('#menu')


if (hamburger && menu) {
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
}