let hamburger = document.querySelector("#hamburger");
let menu = document.querySelector("#menu");

const homeFormSubmit = document.getElementById("homeFormSubmit");

if (hamburger && menu) {
  hamburger.addEventListener("click", (event) => {
    console.log("hamburger.textContent: ", hamburger.textContent);
    switch (hamburger.textContent) {
      case "≡":
        hamburger.textContent = "x";
        menu.classList.remove("hide");
        break;
      case "x":
        hamburger.textContent = "≡";
        menu.classList.add("hide");
        break;
    }
  });
}

// path and query navigations to booking page
if (homeFormSubmit) {
  homeFormSubmit.addEventListener("click", function () {
    const form = document.getElementById("homeForm");
    if (form.reportValidity()) {
      const room = document.getElementById("rooms").value;
      const arrival = document.getElementById("arrival").value;
      const departure = document.getElementById("departure").value;
      const url = `book.html?room=${room}&arrival=${arrival}&departure=${departure}`;
      // load this url
      window.location.href = url;
    }
  });
}
