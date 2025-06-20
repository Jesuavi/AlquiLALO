import React, { useState } from "react";
import { Link } from "react-router-dom"; // Para el botón de Registrarse
import "./LoginPage.css";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";


const LoginPage = () => {
  const [formData, setFormData] = useState({ correo: "", password: "" });

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      formData.correo,
      formData.password
    );
    console.log("✅ Usuario autenticado:", userCredential.user);
    alert("Sesión iniciada correctamente");
    // aquí puedes redirigir, por ejemplo: navigate("/home")
  } catch (error) {
    console.error("❌ Error al iniciar sesión:", error.message);
    alert("Error al iniciar sesión: " + error.message);
  }
};

const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log("✅ Login con Google:", result.user);
    alert("Sesión iniciada con Google");
  } catch (error) {
    console.error("❌ Error al iniciar con Google:", error.message);
    alert("Error con Google: " + error.message);
  }
};

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>INICIO DE SESIÓN</h1> {/* Título principal */}
        
        <form className="login-form" onSubmit={handleLogin}>

          <div className="form-group">
            <label>Email</label>
            <input
  type="email"
  name="correo"
  value={formData.correo}
  onChange={handleChange}
  placeholder="ejemplo@unimet.edu.ve"
  required
/>

          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
  type="password"
  name="password"
  value={formData.password}
  onChange={handleChange}
  placeholder="••••••"
  required
/>

          </div>

          <button type="submit" className="login-button">
            Iniciar Sesión
          </button>
          <button
  type="button"
  className="google-login-button"
  onClick={handleGoogleLogin}
>
  Iniciar sesión con Google
</button>

        </form>

        <div className="register-prompt">
          <p>¿Aún no tienes cuenta? Regístrate en el botón de abajo</p>
          <Link to="/register" className="register-button">
            Registrarse
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
