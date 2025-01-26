// --- Menú de navegación ---
// Gestiona la visibilidad del menú de navegación

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); 
    navbar.classList.toggle('active');  
};

// --- Animación de texto con Typed.js ---
// Crea una animación de texto 
const typed = new Typed('.multiple-text', {
    strings: ['estudiante de DAM', 'junior developer'], // Frases que aparecerán en la animación
    typeSpeed: 100,      // Velocidad de escritura
    backSpeed: 100,      // Velocidad de borrado
    backDelay: 2000,     // Retraso antes de borrar el texto
    loop: true           // Repite la animación infinitamente
});