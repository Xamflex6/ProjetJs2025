// mode sombre
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Vérifier la préférence enregistrée pour le mode sombre
const darkMode = localStorage.getItem('darkMode');
if (darkMode === 'enabled') {
    body.setAttribute('data-theme', 'dark');
}

darkModeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('darkMode', null);
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('darkMode', 'enabled');
    }
});

// Print
const printButton = document.getElementById('printButton');

printButton.addEventListener('click', () => {
    window.print();
});

// Défilement fluide pour une meilleure UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation avec ScrollReveal
ScrollReveal().reveal('section', {
    duration: 1000,
    origin: 'bottom',
    distance: '30px',
    easing: 'ease-in-out',
    reset: false
});