import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">AlquiLALO</div>
      <nav className="nav">
        <a href="#">Inicio</a>
        <a href="#features">Beneficios</a>
        <a href="#faq">FAQ</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <div classname="auth-buttons">
          <button className="login-btn">Iniciar Sesión</button>
      </div>
    </header>
  );
};

export default Header;
