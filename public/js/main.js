const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const closeMenu = document.getElementById('closeMenu');
const navLinks = document.querySelectorAll('.nav-btn');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});