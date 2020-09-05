// nav 

const navbarToggle = document.querySelector('.navbar-toggle input');
const nav = document.querySelector('nav ul');

navbarToggle.addEventListener('click' , () => {
    nav.classList.toggle('slide');
});