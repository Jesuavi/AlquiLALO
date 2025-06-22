import React, { useState } from "react";
import "../styles/LandingPage.css";
import axios from "axios";

const LandingPage = () => {
  const [filters, setFilters] = useState({
    fecha: "",
    hora: "",
    duracion: "",
    capacidad: "",
  });

  const [espacios, setEspacios] = useState([]);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleBuscar = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/espacios/disponibles", {
        params: filters,
      });
      setEspacios(res.data);
    } catch (error) {
      console.error("Error al buscar espacios:", error);
    }
  };

  return (
    <section className="fold">
      <h1>Organiza. Selecciona. Alquilalo.</h1>
      <p>
        Gestiona espacios para eventos, clases o reuniones desde cualquier
        dispositivo con AlquiLALO.
      </p>

      <div className="search-bar">
        <input type="date" name="fecha" value={filters.fecha} onChange={handleChange} />
        <input type="time" name="hora" value={filters.hora} onChange={handleChange} />
        <select name="duracion" value={filters.duracion} onChange={handleChange}>
          <option disabled value="">Duración del evento</option>
          <option value="45">45 minutos</option>
          <option value="90">1 hora 30 min</option>
          <option value="120">2 horas</option>
          <option value="180">3 horas</option>
          <option value="360">6 horas</option>
          <option value="720">12 horas</option>
          <option value="1440">24 horas</option>
        </select>
        <select name="capacidad" value={filters.capacidad} onChange={handleChange}>
          <option disabled value="">Visitantes</option>
          <option value="50">0 - 50</option>
          <option value="100">51 - 100</option>
          <option value="200">101 - 200</option>
          <option value="300">201 - 300</option>
          <option value="500">301 - 500</option>
        </select>
      </div>

      <button className="cta-button" onClick={handleBuscar}>Buscar</button>

      {/* Mostrar resultados */}
      <section className="results">
        {espacios.length > 0 ? (
          espacios.map((espacio, i) => (
            <div key={i} className="result-card">
              <h3>{espacio.nombre}</h3>
              <p>Capacidad: {espacio.capacidad}</p>
              <p>Tipo: {espacio.tipo}</p>
              <p>Ubicación: {espacio.ubicacion}</p>
            </div>
          ))
        ) : (
          <p>No se encontraron espacios aún.</p>
        )}
      </section>
    </section>
  );
};

export default LandingPage;

