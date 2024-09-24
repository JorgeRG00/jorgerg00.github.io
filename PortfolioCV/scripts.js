// Funcionalidad de botón para descargar el CV
document.getElementById('downloadCV').addEventListener('click', function() {
    window.open('CV_Jorge_Roldan_Garcia.pdf', '_blank');
});

// Navegación suave entre secciones
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 60, // Ajuste para compensar la barra de navegación fija
            behavior: 'smooth'
        });
    });
});

function typeWriter(text, element, delay) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, delay);
        }
    }
    type();
}

document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('.typewriter-text');
    typeWriter("Jorge Roldán García", title, 100); // Ajusta la velocidad del efecto cambiando el valor de delay
});