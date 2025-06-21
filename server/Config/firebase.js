import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

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

export { auth, googleProvider };
