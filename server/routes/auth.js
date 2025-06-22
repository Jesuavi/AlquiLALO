const express = require('express');
const router = express.Router();

// Puedes agregar aquí rutas futuras si lo necesitas
router.get('/', (req, res) => {
  res.send('Ruta /api/auth activa');
});

module.exports = router;


