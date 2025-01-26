// --- Menú de navegación ---
// Gestiona la visibilidad del icono menú de navegación

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); 
    navbar.classList.toggle('active');  
};
