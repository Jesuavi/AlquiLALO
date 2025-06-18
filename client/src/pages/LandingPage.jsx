import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./LandingPage.css";

AOS.init();

const LandingPage = () => {
  return (
    <div className="fold">
      <h1 data-aos="fade-up">Organiza. Selecciona. Alquilalo.</h1>
      <p data-aos="fade-up" data-aos-delay="200">
        Gestiona espacios para eventos, clases o reuniones desde cualquier
        dispositivo con AlquiLALO.
      </p>

      <div className="search-bar" data-aos="fade-up" data-aos-delay="400">
        <input type="date" placeholder="Fecha" />
        <input type="time" placeholder="Hora" />
        <select>
          <option disabled selected>
            Duración del evento
          </option>
          <option>45 minutos</option>
          <option>1 hora 30 min</option>
          <option>2 horas</option>
          <option>3 horas</option>
          <option>6 horas</option>
          <option>12 horas</option>
          <option>24 horas</option>
        </select>
        <select>
          <option disabled selected>
            Visitantes
          </option>
          <option>0 - 50</option>
          <option>51 - 100</option>
          <option>101 - 200</option>
          <option>201 - 300</option>
          <option>301 - 500</option>
        </select>
      </div>

      <button className="cta-button" data-aos="fade-up" data-aos-delay="600">
        Buscar
      </button>
    </div>
  );
};

export default LandingPage;
