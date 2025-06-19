const express = require("express");
const router = express.Router();
const { UsuarioInstitucional } = require("../models/Usuario");

router.post("/register", (req, res) => {
  const { nombre, correo, telefono, fotoURL } = req.body;

  if (!nombre || !correo) {
    return res.status(400).json({ error: "Faltan campos requeridos" });
  }

  // Simulamos creación de ID y fotoURL por defecto si no se envía
  const id = Date.now().toString();
  const usuario = new UsuarioInstitucional(
    id,
    nombre,
    correo,
    telefono || "",
    fotoURL || ""
  );

  console.log("Usuario creado:", usuario);

  // Aquí podrías guardarlo en una DB más adelante
  res.status(201).json({
    mensaje: "Usuario registrado correctamente",
    datos: usuario,
  });
});

module.exports = router;
