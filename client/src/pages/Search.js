// File: /client/src/pages/Search.js
// Function: Página de búsqueda de trabajos con filtros y resultados listados.

import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/search.css';

function Search() {
  const [filters, setFilters] = useState({
    genero: '',
    edad: '',
    ubicacion: '',
    tipoProduccion: '',
    skills: '',
    salario: '',
    duracionProyecto: ''
  });

  const [results] = useState([
    {
      id: 1,
      remunerado: true,
      title: '"The Spot Addict", Sound Recordist',
      location: 'Barcelona, Cataluña, España',
      description: 'Buscando un grabador de sonido para sketches de comedia...',
      buttonText: 'Grabar de sonido',
      details: 'Se dispara el 15 de diciembre (9:30 a.m - 6 p.m)'
    },
    {
      id: 2,
      remunerado: true,
      title: '"Huellas en la Arena", Montador',
      location: 'Madrid, España',
      description: 'Necesitamos un montador de vídeo para un documental corto...',
      buttonText: 'Montaje / Edición',
      details: 'Fechas: Enero 2024, rodaje en exteriores...'
    }
  ]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    console.log('Aplicando filtros:', filters);
    // Lógica de filtrado o llamada a backend
  };

  return (
    <div className="search-page">
      <NavBar isLoggedIn={true} userAvatar="/images/arlette.jpg" />
      <div className="filmstrip"></div>

      {/* Botones principales */}
      <div className="top-buttons">
        <button className="top-btn active">Todos los Trabajos</button>
        <button className="top-btn">Actores y Artistas</button>
        <button className="top-btn">Recursos</button>
      </div>

      {/* Fila de filtros */}
      <div className="filters-row">
        <div className="filter-box">
          <span className="filter-title">Género</span>
          <select name="genero" onChange={handleFilterChange} value={filters.genero}>
            <option value="">Todos</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div className="filter-box">
          <span className="filter-title">Edad</span>
          <select name="edad" onChange={handleFilterChange} value={filters.edad}>
            <option value="">Todas</option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36-50">36-50</option>
          </select>
        </div>

        <div className="filter-box">
          <span className="filter-title">Ubicación</span>
          <input
            type="text"
            name="ubicacion"
            placeholder="Ej: Barcelona"
            value={filters.ubicacion}
            onChange={handleFilterChange}
          />
        </div>

        <div className="filter-box">
          <span className="filter-title">Tipo de Producción</span>
          <select name="tipoProduccion" onChange={handleFilterChange} value={filters.tipoProduccion}>
            <option value="">Todas</option>
            <option value="cine">Cine</option>
            <option value="tv">Televisión</option>
            <option value="webseries">Webseries</option>
            <option value="documental">Documental</option>
          </select>
        </div>

        <div className="filter-box">
          <span className="filter-title">Skills</span>
          <input
            type="text"
            name="skills"
            placeholder="Ej: Montaje"
            value={filters.skills}
            onChange={handleFilterChange}
          />
        </div>

        <div className="filter-box">
          <span className="filter-title">Salario</span>
          <input
            type="text"
            name="salario"
            placeholder="Ej: 1000€"
            value={filters.salario}
            onChange={handleFilterChange}
          />
        </div>

        <div className="filter-box">
          <span className="filter-title">Duración</span>
          <input
            type="text"
            name="duracionProyecto"
            placeholder="Ej: 2 meses"
            value={filters.duracionProyecto}
            onChange={handleFilterChange}
          />
        </div>

        <div className="filter-box">
          <button className="btn-pink" onClick={handleSearch}>Buscar</button>
        </div>
      </div>

      {/* Resultados */}
      <div className="results-section">
        <h3 className="results-count">{results.length} Resultados de tu búsqueda:</h3>
        {results.map(item => (
          <div key={item.id} className="result-card">
            {item.remunerado && <div className="remunerado-label">Remunerado €</div>}

            <div className="result-info">
              <h4 className="result-title">{item.title}</h4>
              <p className="result-location">{item.location}</p>
              <p className="result-desc">{item.description}</p>
              <p className="result-details">{item.details}</p>
            </div>

            <div className="result-button">
              <button className="big-action-btn">{item.buttonText}</button>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Search;
