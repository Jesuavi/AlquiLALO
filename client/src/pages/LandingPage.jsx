import React, { useState } from "react";
import "../styles/LandingPage.css";

const LandingPage = () => {
  // Estados para los filtros
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [duracion, setDuracion] = useState("");
  const [capacidad, setCapacidad] = useState("");

  // Función de búsqueda (más adelante enviará datos al backend)
  const handleBuscar = () => {
    const filtros = { fecha, hora, duracion, capacidad };
    console.log("Filtros seleccionados:", filtros);
  };

  return (
    <section className="fold">
      <h1>Organiza. Selecciona. Alquilalo.</h1>
      <p>Gestiona espacios para eventos, clases o reuniones desde cualquier dispositivo con AlquiLALO.</p>

      <div className="search-bar">
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
        <input
          type="time"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        />
        <select
          value={duracion}
          onChange={(e) => setDuracion(e.target.value)}
        >
          <option disabled value="">
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
        <select
          value={capacidad}
          onChange={(e) => setCapacidad(e.target.value)}
        >
          <option disabled value="">
            Visitantes
          </option>
          <option>0 - 50</option>
          <option>51 - 100</option>
          <option>101 - 200</option>
          <option>201 - 300</option>
          <option>301 - 500</option>
        </select>
      </div>

      <button className="cta-button" onClick={handleBuscar}>
        Buscar
      </button>
    </section>
  );
};

export default LandingPage;
