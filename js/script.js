let navbar = document.querySelector(".navbar");

let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .navbar a");

window.addEventListener("scroll", () => {
  // console.log("100");
  navbar.classList.remove("active");
  // console.log("scrolled\n");
  section.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header .navbar a[href*=" + id + "]")
          .classList.add("active");
        // console.log("header .navbar a[href*=" + id + "]");
      });
    }
  });
});

// Rushik's code for slider
var counter = 1;
setInterval(function() {
    document.getElementById("r" + counter).checked = true;
    counter++;
    if (counter > 5) {
        counter = 1;
    }
}, 3000);