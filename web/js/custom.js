let menu = document.getElementById('js-menu');
let trigger = document.querySelector('.js-trigger');

menu.addEventListener('click', function () {
    trigger.classList.toggle('is-open');
    menu.classList.toggle('has-cross');
});