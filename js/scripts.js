// Ocultar el spinner cuando la página se carga
window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.display = 'none';
    }
});

// Scroll suave para enlaces internos
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Evitar el comportamiento predeterminado del enlace

        // Obtener la ubicación del destino
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Hacer el scroll hasta el destino con una animación suave
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Cambiar el fondo de la barra de navegación cuando se haga scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.custom-navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Aplicar animación de fade-in a los elementos principales
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 100);
    });
});

// Aplicar animación de slide-in a las tarjetas cuando el usuario hace scroll
window.addEventListener('scroll', function () {
    const cards = document.querySelectorAll('.slide-in');
    cards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (cardPosition < screenPosition) {
            card.classList.add('slide-in');
        }
    });
});