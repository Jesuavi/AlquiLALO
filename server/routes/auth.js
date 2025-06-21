const express = require('express');
const router = express.Router();
const { admin, db } = require('../Config/firebaseAdmin');

// POST /api/register
router.post('/register', async (req, res) => {
  const { email, password, nombre, apellido, fechaNacimiento, telefono, rol } = req.body;

  if (!email.endsWith("@correo.unimet.edu.ve")) {
    return res.status(400).json({ error: "Solo se permiten correos @correo.unimet.edu.ve" });
  }

  try {
    // Crea el usuario en Firebase Auth
    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName: `${nombre} ${apellido}`,
    });

    // Guarda datos adicionales en Firestore
    await db.collection('usuarios').doc(userRecord.uid).set({
      nombre,
      apellido,
      fechaNacimiento,
      correo: email,
      telefono,
      rol,
      fotoURL: '',
    });

    res.status(201).json({ message: 'Usuario registrado', uid: userRecord.uid });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

