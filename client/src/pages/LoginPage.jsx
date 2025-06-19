import React from "react";
import { Link } from "react-router-dom"; // Para el botón de Registrarse
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1>INICIO DE SESIÓN</h1> {/* Título principal */}
        
        <form className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="ejemplo@unimet.edu.ve" 
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input 
              type="password" 
              placeholder="••••••" 
            />
          </div>

          <button type="submit" className="login-button">
            Iniciar Sesión
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
