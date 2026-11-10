document.addEventListener('DOMContentLoaded', () => {
    // Menú desplegable para móviles
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Validación interactiva del formulario
    const diorForm = document.getElementById('diorForm');
    const emailInput = document.getElementById('emailInput');
    const formMessage = document.getElementById('formMessage');

    if (diorForm) {
        diorForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailValue = emailInput.value.trim();

            if (emailValue !== '') {
                formMessage.style.color = '#c5a059';
                formMessage.textContent = '¡Gracias por suscribirte a Dior Beauty!';
                emailInput.value = '';
            } else {
                formMessage.style.color = 'red';
                formMessage.textContent = 'Por favor, ingresa un correo válido.';
            }
        });
    }
});