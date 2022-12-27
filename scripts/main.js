'use strict';

function addEventOnElements(elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

const navbar = document.querySelector("[data-navbar]");
const navTooglers = document.querySelectorAll("[data-nav-toogler]");
const overlay = document.querySelector("[data-overlay]");

const toogleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTooglers, 'click', toogleNavbar)

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
  if(window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
})