const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // para parsear JSON en las peticiones

// Rutas
app.use('/api', authRoutes);

// Ruta base
app.get('/', (req, res) => {
  res.send('API de AlquiLALO funcionando correctamente 🚀');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
