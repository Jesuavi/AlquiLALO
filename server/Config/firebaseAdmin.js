import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
const admin = require("firebase-admin");

// Usa tu archivo de credenciales descargado de Firebase Console
const serviceAccount = require("./serviceAccountKey.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

const firebaseConfig = {
  apiKey: "AIzaSyBJQgwe-9N3WtTiuFeMV2Guu6FVEwLWMYE",
  authDomain: "alquilalo-45327.firebaseapp.com",
  projectId: "alquilalo-45327",
  storageBucket: "alquilalo-45327.firebasestorage.app",
  messagingSenderId: "840200056713",
  appId: "1:840200056713:web:50aa9dad1c06e35c6e7b58"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, admin, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, getFirestore, doc, setDoc, getDoc };
