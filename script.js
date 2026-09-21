const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('open');
});

navbar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('open');
    });
});