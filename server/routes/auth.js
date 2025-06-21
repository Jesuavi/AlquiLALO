const express = require('express');
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('firebase/auth');
const { getFirestore, doc, setDoc, getDoc } = require('firebase/firestore');
const { initializeApp } = require('firebase/app');
const router = express.Router();

// Firebase config importado desde tu archivo config
const firebaseConfig = require('../Config/firebase');
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// POST /api/register
router.post('/register', async (req, res) => {
  const { email, password, nombre, telefono, rol } = req.body;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Guardar datos adicionales en Firestore
    await setDoc(doc(db, 'usuarios', user.uid), {
      nombre,
      correo: email,
      telefono,
      rol,
      fotoURL: '', // se puede actualizar después
    });

    res.status(201).json({ message: 'Usuario registrado', uid: user.uid });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// POST /api/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Obtener datos del usuario desde Firestore
    const docRef = doc(db, 'usuarios', user.uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return res.status(404).json({ error: 'Datos del usuario no encontrados' });
    }

    res.status(200).json({
      uid: user.uid,
      ...docSnap.data(),
    });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

module.exports = router;

