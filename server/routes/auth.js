// server/routes/auth.js
const express = require("express");
const router = express.Router();
const authFacade = require("../facade/authFacade");

router.post("/registrar", (req, res) => {
  const { tipo, id, nombre, correo, telefono, fotoURL } = req.body;

  try {
    const nuevoUsuario = authFacade.registrarUsuario(tipo, id, nombre, correo, telefono, fotoURL);
    res.status(201).json(nuevoUsuario);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/usuario/:correo", (req, res) => {
  const { correo } = req.params;
  const usuario = authFacade.obtenerUsuario(correo);
  if (!usuario) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }
  res.json(usuario);
});

module.exports = router;
