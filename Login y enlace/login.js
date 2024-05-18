document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    
    // Simulación de verificación de credenciales
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === 'admin123') {
        // Redirigir a la página de administración de usuarios
        window.location.href = 'admin.html';
    } else {
        alert('Credenciales incorrectas, intente de nuevo.');
    }
});
