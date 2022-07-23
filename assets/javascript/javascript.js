const navbar = document.querySelector('nav.navbar');

const button = document.querySelector('div.menu-icon');

const closeButton = document.querySelector('div.menu-icon').children[0];

button.addEventListener('click', () =>{
    navbar.classList.toggle('active');
    closeButton.classList('menu-outline');
    closeButton.classList('close-outline');
})