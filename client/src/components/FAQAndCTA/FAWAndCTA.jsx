import React from "react";
import "./FAQAndCTA.css";

const FAQAndCTA = () => {
  return (
    <footer id="faq" className="faq-cta-footer" data-aos="fade-up">
      <div className="faq-section">
        <h2>Preguntas frecuentes</h2>
        <p>
          <strong>¿Puedo cancelar mi reserva?</strong> Sí, hasta 24h antes sin
          penalización.
        </p>
        <p>
          <strong>¿Hay descuentos para estudiantes?</strong> Sí, del 30% con
          credencial válida.
        </p>
      </div>

      <div className="cta-section">
        <h2>¿Listo para empezar?</h2>
        <button className="cta-button">Únete gratis</button>
      </div>
    </footer>
  );
};

export default FAQAndCTA;
