const buttonOpenMenu = document.querySelector('.nav-open-btn');
const buttonCloseMenu = document.querySelector('.nav-close-btn');

const navbar = document.querySelector('.navbar');
const overlay = document.querySelector('.overlay');

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