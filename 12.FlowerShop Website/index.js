const menuIcon = document.querySelector('.menu-icon');
const navBar = document.querySelector('.header-part-two');

menuIcon.addEventListener('click', () => {
  navBar.classList.toggle('active');
});


function toggleCart(img) {
    img.classList.toggle("active");
}