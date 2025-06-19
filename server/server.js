const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);

app.get('/api/ping', (req, res) => {
  res.json({ message: 'Servidor funcionando correctamente' });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
