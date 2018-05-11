$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    items: 1,
    autoHeight: true,
    nav: true
});

$('.owl-carousel').owlCarousel({
    loop: true,
    autoWidth: true,
    autoHeight: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    autoplaySpeed: true
});

let menu = document.getElementById('js-menu');
let trigger = document.querySelector('.js-trigger');

menu.addEventListener('click', function () {
    trigger.classList.toggle('is-open');
});