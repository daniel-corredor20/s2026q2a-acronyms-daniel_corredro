const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Configuración de CORS
// Permite solicitudes solo desde un dominio específico (p. ej., el cliente Frontend)
const corsOptions = {
  origin: ['https://mi-frontend.com', 'http://localhost:5173'], // Orígenes permitidos
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200
};

// Aplicar el middleware de CORS
app.use(cors(corsOptions));

// Ruta pública / comprobación de estado
app.get('/', (req, res) => {
  res.status(200).json({ message: 'API funcionando correctamente' });
});

// Ruta simulada protegida por política de origen
app.get('/api/data', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: { id: 1, name: 'Semillero Assignment 2026' }
  });
});

// Exportar la app para pruebas y arrancar si se ejecuta directamente
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
}

module.exports = app;