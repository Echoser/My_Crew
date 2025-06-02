// File: /client/src/components/NavBar.js
// Function: Barra de navegación principal con botones y avatar desplegable.

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

function NavBar({ isLoggedIn, userAvatar }) {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleAvatarClick = () => setShowDropdown((prev) => !prev);
  const handleProfile = () => navigate('/profile');
  const handleAccountSettings = () => navigate('/account-settings');
  const handleLogout = () => navigate('/');
  const handleSearchPeople = () => navigate('/search');

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="/images/logo.png"
          alt="Logo My Crew"
          className="navbar-logo"
          style={{ height: 40 }}
        />
      </div>

      <div className="navbar-center">
        {isLoggedIn && (
          <>
            <button className="nav-btn" onClick={() => navigate('/search')}>
              Encontrar Empleo
            </button>
            <button className="nav-btn" onClick={() => navigate('/search')}>
              Encontrar Talento and Crew
            </button>
            <button className="nav-btn" onClick={() => navigate('/community')}>
              Community
            </button>
            <button className="nav-btn search-btn" onClick={handleSearchPeople}>
              Buscar
            </button>
          </>
        )}
      </div>

      <div className="navbar-right">
        {isLoggedIn && (
          <div className="avatar-container" onClick={handleAvatarClick}>
            <img
              src={userAvatar || '/images/default-profile.png'}
              alt="User Avatar"
              className="navbar-avatar"
            />
            {showDropdown && (
              <div className="avatar-dropdown">
                <button onClick={handleProfile}>Perfil</button>
                <button onClick={handleAccountSettings}>Configuración de cuenta</button>
                <button onClick={handleLogout}>Cerrar sesión</button>
              </div>
            )}
          </div>
        )}

        <button className="lang-btn" onClick={() => console.log('Idioma: ES')}>
          ES
        </button>
        <button className="lang-btn" onClick={() => console.log('Idioma: EN')}>
          EN
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
