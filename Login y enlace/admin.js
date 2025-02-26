// Datos iniciales de ejemplo
const users = [
    { cedula: '12345678', name: 'Alice', role: 'Admin' },
    { cedula: '87654321', name: 'Bob', role: 'User' },
    { cedula: '11223344', name: 'Charlie', role: 'Moderator' }
];

// Función para renderizar la tabla de usuarios
function renderUserTable() {
    const userList = document.getElementById('user-list');
    userList.innerHTML = ''; // Limpiar cualquier contenido previo

    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.cedula}</td>
            <td>${user.name}</td>
            <td>${user.role}</td>
        `;
        userList.appendChild(row);
    });
}

// Rellenar la tabla con datos de usuarios al cargar la página
document.addEventListener('DOMContentLoaded', renderUserTable);

// Manejar el envío del formulario para agregar un nuevo usuario
document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const cedula = document.getElementById('cedula').value;
    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;

    // Agregar el nuevo usuario al array
    users.push({ cedula, name, role });

    // Renderizar la tabla nuevamente con el nuevo usuario
    renderUserTable();

    // Limpiar el formulario
    document.getElementById('user-form').reset();
});

