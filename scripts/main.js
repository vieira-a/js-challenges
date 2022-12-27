const buttonOpenMenu = document.querySelector('.nav-open-btn');
const buttonCloseMenu = document.querySelector('.nav-close-btn');

buttonOpenMenu.addEventListener('click', () => {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active")
})

buttonCloseMenu.addEventListener('click', () => {
  navbar.classList.remove("active");
  overlay.classList.remove("active")
  document.body.classList.remove("nav-active")
})

const navbar = document.querySelector('.navbar');
const overlay = document.querySelector('.overlay');

navbar.addEventListener('click', () => {
  navbar.classList.remove("active");
  overlay.classList.remove("active")
  document.body.classList.remove("nav-active")
})

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
  if(window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active")
  }
})

