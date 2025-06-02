// File: /client/src/pages/Home.js
// Function: Página de inicio (Home) con carrusel a la izquierda y opciones de registro/login a la derecha.

import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import '../styles/home.css';

function Home() {
  const navigate = useNavigate();

  const handleJoin = () => {
    navigate('/choose-role');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  // Datos de ejemplo para el carrusel
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
    <div className="home-container">
      <NavBar isLoggedIn={false} />
      <div className="filmstrip"></div>

      <div className="home-content">
        <div className="home-slider">
          <Carousel slides={slidesData} interval={4000} />
        </div>

        <div className="home-right">
          <h2 className="home-title">
            The matchmaking app <br />
            between producers and crews
          </h2>
          <button className="btn-pink" onClick={handleJoin}>
            ¡Únete a My Crew!
          </button>
          <button className="btn-secondary" onClick={handleLogin}>
            ¿Ya eres miembro?
          </button>
          <p className="partners-text">
            Brutal Media • BBC • Netflix
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
