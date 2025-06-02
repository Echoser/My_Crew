// File: /client/src/pages/Dashboard.js
// Function: Página interna del usuario, con pestañas “Actividades” e “Información”.

import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/dashboard.css';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('actividades');
  const [posts, setPosts] = useState([]);
  const [postText, setPostText] = useState('');
  const [postImage, setPostImage] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPostImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const newPost = { text: postText, image: postImage, id: Date.now() };
    setPosts([newPost, ...posts]);
    setPostText('');
    setPostImage(null);
  };

  return (
    <div className="dashboard-container">
      <NavBar isLoggedIn={true} userAvatar="/images/arlette.jpg" />
      <div className="filmstrip"></div>

      {/* Pestañas */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'actividades' ? 'active' : ''}`}
          onClick={() => handleTabClick('actividades')}
        >
          Actividades
        </button>
        <button
          className={`tab ${activeTab === 'informacion' ? 'active' : ''}`}
          onClick={() => handleTabClick('informacion')}
        >
          Información
        </button>
      </div>

      {activeTab === 'actividades' && (
        <div className="activities-container">
          {/* Burbuja de cabecera con foto y datos */}
          <div className="header-bubble">
            <img
              src="/images/arlette.jpg"
              alt="Arlette Peyret"
              className="profile-photo"
            />
            <div className="text-block">
              <h2 className="profile-name">Arlette Peyret</h2>
              <p className="profile-role">
                Business Director and Executive Producer at BRUTAL MEDIA, S.L.
              </p>
              <div className="availability">
                <span className="availability-dot"></span>
                <span className="availability-text">Disponible</span>
              </div>
            </div>
          </div>

          {/* Formulario para colgar posts */}
          <form className="post-form" onSubmit={handlePostSubmit}>
            <h3>Crear publicación</h3>
            <label>Texto</label>
            <textarea
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              rows="3"
              placeholder="Escribe algo..."
              required
            ></textarea>

            <label>Imagen</label>
            <input type="file" onChange={handleImageChange} />

            {postImage && (
              <div className="preview-container">
                <img src={postImage} alt="Preview" className="preview-image" />
              </div>
            )}

            <button className="btn-pink" type="submit">Publicar</button>
          </form>

          {/* Lista de posts */}
          {posts.map((post) => (
            <div key={post.id} className="post-item">
              {post.image && <img src={post.image} alt="Post" />}
              <p>{post.text}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'informacion' && (
        <div className="info-bubble">
          <div className="user-header">
            <img
              src="/images/arlette.jpg"
              alt="Arlette Peyret"
              className="profile-photo"
            />
            <div className="text-block">
              <h2 className="profile-name">Arlette Peyret</h2>
              <p className="profile-role">
                Business Director and Executive Producer at BRUTAL MEDIA, S.L.
              </p>
              <div className="availability">
                <span className="availability-dot"></span>
                <span className="availability-text">Disponible</span>
              </div>
            </div>
          </div>

          <div className="upper-sections">
            {/* Datos Personales */}
            <div className="section-bubble personal-data">
              <h3>Datos Personales</h3>
              <ul>
                <li><strong>Año de nacimiento:</strong> 1990</li>
                <li><strong>Ciudad de residencia:</strong> Barcelona, España</li>
                <li><strong>Idiomas:</strong> Español, Inglés, Francés</li>
              </ul>
            </div>

            {/* Formación */}
            <div className="section-bubble formation">
              <h3>Formación</h3>
              <ul>
                <li>ESAD Madrid – Interpretación (2015-2018)</li>
                <li>Curso intensivo cine y TV – Central de Cine Madrid</li>
                <li>Taller improvisación – La Escalera de Jacob (2020)</li>
              </ul>
            </div>
          </div>

          {/* Experiencia Profesional (ejemplo) */}
          <div className="section-bubble experience-bubble">
            <h3>Experiencia Profesional</h3>
            <h4>Executive Producer, BRUTAL MEDIA, S.L. (2020 - Presente)</h4>
            <p>Gestión de proyectos audiovisuales internacionales.</p>
            <h4>Line Producer, Producciones XYZ (2018 - 2020)</h4>
            <p>Coordinación de equipos en rodajes de cortometrajes.</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Dashboard;
