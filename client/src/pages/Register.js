// File: /client/src/pages/Register.js
// Function: Página de registro con formularios distintos para productor y freelance, usando query param "role".

import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import '../styles/register.css';

function Register() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const role = searchParams.get('role') || 'freelance';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    company: '',
    cif: '',
    address: '',
    contact: '',
    categories: []
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCategories = (e) => {
    const options = e.target.options;
    const selectedCategories = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedCategories.push(options[i].value);
      }
    }
    setFormData({ ...formData, categories: selectedCategories });
  };

  const handleCategoryClick = (e) => {
    const option = e.target.closest('option');
    if (option) {
      option.selected = !option.selected;
      const event = new Event('change', { bubbles: true });
      option.parentElement.dispatchEvent(event);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate('/dashboard');
  };

  // Datos para el carrusel en la parte izquierda
  const slidesData = [
    {
      image: '/images/slide1.jpg',
      role: 'Técnico/a de Postproducción',
      testimonial:
        '"My Crew es el altavoz perfecto para que el talento audiovisual conecte y brille, porque democratiza las oportunidades en un sector donde las conexiones lo son todo"'
    },
    {
      image: '/images/slide2.jpg',
      role: 'Director/a de Fotografía',
      testimonial:
        '"Gracias a My Crew encontré oportunidades que antes parecían imposibles. ¡Ahora trabajo en proyectos internacionales!"'
    },
    {
      image: '/images/slide3.jpg',
      role: 'Actor/Actriz',
      testimonial:
        '"My Crew me abrió las puertas a casting y producciones de manera mucho más sencilla. Es una plataforma imprescindible."'
    }
  ];

  return (
    <div className="register-container">
      <NavBar isLoggedIn={false} />
      <div className="filmstrip"></div>

      <div className={`register-content register-content-${role}`}>
        <div className="register-slider">
          <Carousel slides={slidesData} interval={4000} />
        </div>

        <div className={`register-form-container-${role}`}>
          <h2 className="register-title">Regístrate</h2>
          <form className={`register-form register-form-${role}`} onSubmit={handleSubmit}>
            <input 
              type="text"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input 
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input 
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
            />

            {role === 'productor' && (
              <>
                <input 
                  type="text"
                  name="company"
                  placeholder="Empresa"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
                <input 
                  type="text"
                  name="cif"
                  placeholder="CIF"
                  value={formData.cif}
                  onChange={handleChange}
                  required
                />
                <input 
                  type="text"
                  name="address"
                  placeholder="Dirección"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
                <input 
                  type="text"
                  name="contact"
                  placeholder="Contacto"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </>
            )}

            {role === 'freelance' && (
              <>
                <label>Selecciona tus categorías (Ctrl+Click para múltiples):</label>
                <select 
                  multiple 
                  name="categories"
                  onChange={handleCategories}
                  onClick={handleCategoryClick}
                  required
                >
                  <option value="actores">Actores</option>
                  <option value="directores">Directores</option>
                  <option value="camarografos">Camarógrafos</option>
                  <option value="guionistas">Guionistas</option>
                </select>
              </>
            )}

            <button className="btn-pink" type="submit">Registrarse</button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Register;
