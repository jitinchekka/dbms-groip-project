let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .navbar a");

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  section.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 100;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header .navbar a[href*=" + id + "]")
          .classList.add("active");
        console.log("header .navbar a[href*=" + id + "]");
      });
    }
  });
};

var counter = 1;
setInterval(function() {
	document.getElementById("r" + counter).checked = true;
	counter++;
	if (counter > 3) {
		counter = 1;
	}
}, 5000);
