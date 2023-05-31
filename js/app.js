wow = new WOW({
  boxClass: 'animate__animated'

}).init();
// wow js

var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
});
// hamburger

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
// swiper

// scroll
window.addEventListener('scroll',function(){
  let nav=document.querySelector('nav')
  nav.classList.toggle('sticky',window.scrollY>0)
})