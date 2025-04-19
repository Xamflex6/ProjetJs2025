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

// Animation d'apparition progressive via l'intersection observer
const sections = document.querySelectorAll('section');
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(section);
});
