import React, { useState } from "react";
import "../styles/LandingPage.css";

const LandingPage = () => {
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [duracion, setDuracion] = useState("");
  const [capacidad, setCapacidad] = useState("");
  const [espacios, setEspacios] = useState([]);

  const handleBuscar = async () => {
    try {
      const params = new URLSearchParams({
        fecha,
        hora,
        duracion,
        capacidad,
      });

      const res = await fetch(`http://localhost:5000/api/espacios/filtrar?${params}`);
      const data = await res.json();
      setEspacios(data.resultados);
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
        <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
        <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} />
        <select value={duracion} onChange={(e) => setDuracion(e.target.value)}>
          <option disabled value="">Duración del evento</option>
          <option>45 minutos</option>
          <option>1 hora 30 min</option>
          <option>2 horas</option>
          <option>3 horas</option>
          <option>6 horas</option>
          <option>12 horas</option>
          <option>24 horas</option>
        </select>
        <select value={capacidad} onChange={(e) => setCapacidad(e.target.value)}>
          <option disabled value="">Visitantes</option>
          <option>0 - 50</option>
          <option>51 - 100</option>
          <option>101 - 200</option>
          <option>201 - 300</option>
          <option>301 - 500</option>
        </select>
      </div>

      <button className="cta-button" onClick={handleBuscar}>Buscar</button>

      {/* Mostrar resultados */}
      <div className="resultados">
        {espacios.length > 0 ? (
          <div className="features-list">
            {espacios.map((espacio) => (
              <div key={espacio.id} className="feature">
                <h3>{espacio.nombre}</h3>
                <p>Capacidad: {espacio.capacidad}</p>
                <p>{espacio.disponible ? "Disponible ✅" : "No disponible ❌"}</p>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ marginTop: "20px" }}>No hay resultados aún.</p>
        )}
      </div>
    </section>
  );
};

export default LandingPage;

