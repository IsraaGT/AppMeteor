import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost', // Cambia según tu configuración
  user: 'root',
  password: '', // Pon tu contraseña de MySQL si la tienes
  database: 'practica' // Nombre de tu base de datos
});

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión: ' + err.stack);
    return;
  }
  console.log('Conectado como id ' + connection.threadId);
});

export default connection;
