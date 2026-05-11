let searchform = document.querySelector('.search-form');
let searchbtn = document.querySelector('#search-btn');

searchbtn.onclick = () => {
    searchform.classList.toggle('active');
    shoppingcart.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}



let shoppingcart = document.querySelector('.shopping-cart');
let cartbtn = document.querySelector('#cart-btn');

cartbtn.onclick = () => {
    shoppingcart.classList.toggle('active');
    searchform.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}


let loginform = document.querySelector('.login-form');
let loginbtn = document.querySelector('#login-btn');

loginbtn.onclick = () => {
    loginform.classList.toggle('active');
    searchform.classList.remove('active');
    shoppingcart.classList.remove('active');
    navbar.classList.remove('active');
}


let navbar = document.querySelector('.navbar');
let menubtn = document.querySelector('#menu-btn');

menubtn.onclick = () => {
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    shoppingcart.classList.remove('active');
    loginform.classList.remove('active');

}


window.onscroll = () => {
    searchform.classList.remove('active');
    shoppingcart.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}


/*swiper code -product*/

var swiper = new Swiper(".product-slider", {
    loop:true,
      slidesPerView: 1,
      spaceBetween: 15,
      autoplay:{
        delay:7500,
        disableOnInteraction: false,
      },
       
      breakpoints: {
        0: {
          slidesPerView: 1,
          
        },
        768: {
          slidesPerView: 2,
          
        },
        1024: {
          slidesPerView: 3,
          
        },
      },
    });

  
    /*swiper code -review*/

var swiper = new Swiper(".review-slider", {
    loop:true,
      slidesPerView: 1,
      spaceBetween: 15,
      autoplay:{
        delay:7500,
        disableOnInteraction: false,
      },
       
      breakpoints: {
        0: {
          slidesPerView: 1,
          
        },
        768: {
          slidesPerView: 2,
          
        },
        1024: {
          slidesPerView: 3,
          
        },
      },
    });