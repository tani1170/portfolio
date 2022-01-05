//variabel, der refererer til ".burger"
const btn = document.querySelector(".burger");
//variabel, der refererer til "nav"
const nav = document.querySelector("nav");
//variabel, der refererer til "ul"
const ul = document.querySelector("ul");

const bknap = document.querySelector(".burger_container");

// const logo = document.querySelector(".logo2");

// Lav en function, der hedder toggleMenu()
function toggleBurger() {
  // 1. Toggle en klasse på nav vha. classList.toggle
  // 2. Toggle en klasse, der hedder "shown"
  nav.classList.toggle("nav");
  nav.classList.toggle("shown");
  bknap.classList.toggle("bknap");
  bknap.classList.toggle("white");
}

//Hvis skærmen er under 720 px, har menuen en hvid baggrund. Ellers fjernes den hvide baggrund
function myFunction(x) {
  if (x.matches) {
    ul.classList.toggle("white");
  } else {
    ul.classList.remove("white");
  }
}

//Når skærmen er større end 720px, forsvinder den hvide baggrund bag menuen
var x = window.matchMedia("(max-width: 720px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

/* Tilføj et klik-event til btn, der sætter toggleMenu-funktionen i gang */
btn.addEventListener("click", toggleBurger);
