// server/routes/espacios.js
const express = require("express");
const router = express.Router();

// Ruta GET que recibe parámetros por query string
router.get("/filtrar", async (req, res) => {
  const { fecha, hora, duracion, capacidad } = req.query;

  try {
    // Aquí iría la lógica real para consultar una base de datos
    console.log("Filtros recibidos:", { fecha, hora, duracion, capacidad });

    // Simulación de espacios (esto luego se sustituirá con datos reales)
    const espaciosFiltrados = [
      {
        id: 1,
        nombre: "Sala de Conferencias A",
        capacidad: "101 - 200",
        disponible: true
      },
      {
        id: 2,
        nombre: "Salón Multiuso B",
        capacidad: "51 - 100",
        disponible: true
      }
    ];

    res.status(200).json({ resultados: espaciosFiltrados });
  } catch (error) {
    console.error("Error al filtrar espacios:", error);
    res.status(500).json({ error: "Error al buscar espacios" });
  }
});

module.exports = router;
