// File: /client/src/pages/Profile.js
// Function: Página pública de usuario (perfil), muestra información personal y formación.

import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/profile.css';

function Profile() {
  // Datos de ejemplo. Reemplaza con datos reales si los obtienes de un backend
  const userData = {
    name: 'Arlette Peyret',
    role: 'Business Director and Executive Producer at BRUTAL MEDIA, S.L.',
    availability: 'Disponible',
    photo: '/images/arlette.jpg',
    personalData: {
      nacimiento: '1990',
      ciudad: 'Barcelona, España',
      idiomas: 'Español, Inglés, Francés'
    },
    formacion: [
      'Escuela Superior de Arte Dramático de Madrid (RESAD) - Interpretación (2015-2018)',
      'Curso intensivo de cine y televisión - Central de Cine Madrid',
      'Taller de improvisación teatral - Escuela La Escalera de Jacob (2020)'
    ]
  };

  return (
    <div className="profile-container">
      <NavBar isLoggedIn={true} userAvatar="/images/arlette.jpg" />
      <div className="filmstrip"></div>

      <div className="profile-content">
        <div className="profile-header">
          <img src={userData.photo} alt={userData.name} className="profile-photo" />
          <div className="profile-info">
            <h2 className="profile-name">{userData.name}</h2>
            <p className="profile-role">{userData.role}</p>
            <div className="availability">
              <span className="availability-dot"></span>
              <span className="availability-text">Disponibilidad: {userData.availability}</span>
            </div>
          </div>
        </div>

        <div className="profile-body">
          <div className="section-bubble personal-data">
            <h3>Datos Personales</h3>
            <ul>
              <li><strong>Año de nacimiento:</strong> {userData.personalData.nacimiento}</li>
              <li><strong>Ciudad de residencia:</strong> {userData.personalData.ciudad}</li>
              <li><strong>Idiomas:</strong> {userData.personalData.idiomas}</li>
            </ul>
          </div>

          <div className="section-bubble formation">
            <h3>Formación</h3>
            <ul>
              {userData.formacion.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Profile;
