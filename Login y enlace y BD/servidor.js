const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'tu_usuario',
    password: 'tu_contraseña',
    database: 'user_management'
});

// Conexión a la base de datos
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conectado a la base de datos MySQL');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Ruta para la página de login
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Ruta para la página de administración
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// Ruta para manejar el inicio de sesión
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const query = 'SELECT * FROM login WHERE username = ? AND password = ?';
    db.query(query, [username, password], (err, results) => {
        if (err) {
            return res.status(500).send('Error en el servidor');
        }

        if (results.length > 0) {
            res.redirect('/admin');
        } else {
            res.send('Credenciales incorrectas, intente de nuevo.');
        }
    });
});

// Ruta para agregar un nuevo usuario
app.post('/add-user', (req, res) => {
    const { cedula, name, role } = req.body;

    const query = 'INSERT INTO usuarios (cedula, name, role) VALUES (?, ?, ?)';
    db.query(query, [cedula, name, role], (err, results) => {
        if (err) {
            return res.status(500).send('Error en el servidor');
        }
        res.redirect('/admin');
    });
});

// Ruta para obtener la lista de usuarios
app.get('/users', (req, res) => {
    const query = 'SELECT * FROM usuarios';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).send('Error en el servidor');
        }
        res.json(results);
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});