import React from "react";
import { Link, useLocation } from "react-router-dom"; // Añade useLocation
import "./Header.css";

const Header = () => {
  const location = useLocation(); // Obtiene la ruta actual
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register"; // Detecta si está en login/register

  return (
    <header className="header">
      <div className="logo">AlquiLALO</div>
      <nav className="nav">
        <Link to="/">Inicio</Link>
        <Link to="#features">Beneficios</Link>
        <Link to="#faq">FAQ</Link>
        <Link to="#contacto">Contacto</Link>
      </nav>
      <div className="auth-buttons">
        {/* Oculta el botón si está en /login o /register */}
        {!isAuthPage && (
          <Link to="/login" className="login-btn">Iniciar Sesión</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
