const buttonToogleMenu = document.getElementById('toogle-menu');
const menuPage = document.querySelector('.menu')
const menuLine1 = document.querySelector('.line1')
const menuLine2 = document.querySelector('.line2')
const menuLine3 = document.querySelector('.line3')
console.log(menuLine1)

buttonToogleMenu.addEventListener('click', function(){
  if(!menuPage.classList.contains('active')){
    menuPage.classList.replace('menu', 'active');
    buttonToogleMenu.classList.add('button-active')
  } else {
    menuPage.classList.replace('active', 'menu')
    buttonToogleMenu.classList.remove('button-active')
  } 
})
