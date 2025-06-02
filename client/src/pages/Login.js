// File: /client/src/pages/Login.js
// Function: Página de inicio de sesión con formulario para email/contraseña.

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/login.css';

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría lógica de autenticación...
    setIsLoggedIn(true);
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <NavBar isLoggedIn={false} />
      <div className="filmstrip"></div>

      <div className="login-content">
        <h2 className="login-title">Iniciar Sesión</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
          <button className="btn-pink" type="submit">Entrar</button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
