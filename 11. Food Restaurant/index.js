const menuIcon = document.querySelector('.menu-icon');
const navBar = document.querySelector('.header-part-two');

menuIcon.addEventListener('click', () => {
  navBar.classList.toggle('active');
});


const slider = document.querySelector('.hero-slider');
const slides = document.querySelectorAll('.hero_section_one');

let index = 0;
let direction = 1;

setInterval(() => {

  index += direction;


  if (index === slides.length - 1) {
    direction = -1;
  }


  if (index === 0) {
    direction = 1;
  }

  slider.style.transform = `translateX(-${index * 100}%)`;

}, 3000);