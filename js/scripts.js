
// Obtener todos los enlaces de la página
const links = document.querySelectorAll('a[href^="#"]');

// Añadir un evento de clic a cada enlace
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Evitar el comportamiento predeterminado del enlace

        // Obtener la ubicación del destino
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Hacer el scroll hasta el destino con una animación suave
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
// Cambiar el fondo de la barra de navegación cuando se haga scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.custom-navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

