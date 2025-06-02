// File: /client/src/pages/ChooseRole.js
// Function: Página para elegir rol (Productor o Freelance) antes de registrarse.

import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/chooseRole.css';

function ChooseRole() {
  const navigate = useNavigate();

  const handleProducer = () => {
    navigate('/register?role=productor');
  };

  const handleFreelance = () => {
    navigate('/register?role=freelance');
  };

  return (
    <div className="choose-role-container">
      <NavBar isLoggedIn={false} />
      <div className="filmstrip"></div>

      <div className="choose-role-content">
        <h2 className="choose-role-title">¿Qué quieres hacer?</h2>
        <button className="btn-pink" onClick={handleProducer}>
          Busco talento
        </button>
        <button className="btn-secondary" onClick={handleFreelance}>
          Busco proyecto
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default ChooseRole;
