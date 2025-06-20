
import { Link } from "react-router-dom";
import "./RegisterPage.css";
import React, { useState } from "react";


const RegisterPage = () => {
  
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    fechaNacimiento: "",
    correo: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          correo: formData.correo,
          telefono: "04140000000",
          fotoURL: ""
        })
      });

      const data = await res.json();
      console.log("✅ Respuesta del backend:", data);
      alert("Registro exitoso");
    } catch (error) {
      console.error("❌ Error en el registro:", error);
      alert("Error en el registro");
    }
  };
  return (
    <div className="register-page">
      <div className="register-container">
        <h1>Regístrate</h1>
        
        <div className="social-register">
          <p>Regístrate usando Google:</p>
          {/* Botón de Google (opcional) */}
          <button className="google-button">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" />
            Continuar con Google
          </button>
        </div>

        <div className="divider">
          <span>o</span>
        </div>

        <form className="register-form">
          <div className="form-group">
            <label>Nombre</label>
            <input 
              type="text" 
              placeholder="Ej: Juan" 
              required 
            />
          </div>

          <div className="form-group">
            <label>Apellido</label>
            <input 
              type="text" 
              placeholder="Ej: Pérez" 
              required 
            />
          </div>

          <div className="form-group">
            <label>Fecha de nacimiento</label>
            <input 
              type="date" 
              required 
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="ejemplo@unimet.edu.ve" 
              required 
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input 
              type="password" 
              placeholder="••••••" 
              required 
            />
          </div>

          <div className="form-group">
            <label>Confirmar contraseña</label>
            <input 
              type="password" 
              placeholder="••••••" 
              required 
            />
          </div>

          <button type="submit" className="register-button">
            Registrarse
          </button>
        </form>

        <div className="login-prompt">
          <p>¿Ya tienes cuenta? Dale al siguiente botón.</p>
          <Link to="/login" className="login-link">
            Inicio de sesión
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
