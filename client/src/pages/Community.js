// /client/src/pages/Community.js
// Descripción: Página Community tipo Instagram, con tres columnas: secciones de sugerencias (amistad y trabajo), feed y próximos eventos.

import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/community.css';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';

function Community() {
  return (
    <div className="community-container">
      <NavBar />
      <div className="filmstrip"></div>

      <div className="main-content">
        {/* Columna Izquierda: Secciones de sugerencias */}
        <aside className="suggestions-container">
          <section className="friend-suggestions">
            <h3>Sugerencias de amistad</h3>
            <div className="suggestion">
              <img src="/images/profile4.jpg" alt="Usuario 4" />
              <div className="suggestion-info">
                <span className="username">usuario4</span>
                <button className="follow-btn">Seguir</button>
              </div>
            </div>
            <div className="suggestion">
              <img src="/images/profile5.jpg" alt="Usuario 5" />
              <div className="suggestion-info">
                <span className="username">usuario5</span>
                <button className="follow-btn">Seguir</button>
              </div>
            </div>
          </section>

          <section className="job-suggestions">
            <h3>Sugerencias de trabajo</h3>
            <div className="job-suggestion">
              <img src="/images/company1.jpg" alt="Empresa 1" />
              <div className="job-info">
                <span className="job-title">Empresa XYZ</span>
                <button className="apply-btn">Postular</button>
              </div>
            </div>
            <div className="job-suggestion">
              <img src="/images/company2.jpg" alt="Empresa 2" />
              <div className="job-info">
                <span className="job-title">Empresa ABC</span>
                <button className="apply-btn">Postular</button>
              </div>
            </div>
          </section>
        </aside>

        {/* Columna Centro: Feed */}
        <section className="feed-container">
          <h2 className="community-title">Community</h2>

          {/* Post 1 */}
          <div className="post">
            <div className="post-header">
              <img src="/images/profile1.jpg" alt="Foto de perfil" className="profile-pic" />
              <span className="username">MiUsuario</span>
            </div>

            {/* Contenedor con agujeros, imagen y texto */}
            <div className="post-frame">
              <div className="film-hole left"></div>
              <div className="film-hole right"></div>

              <img src="/images/Post1.png" alt="Post 1" className="post-image" />
              <p className="post-text">
                <strong>¡¡Hemos recreado la Barcelona del año 1981!!</strong>
                <br />
                🏦 Aquí os presentamos la reel de Efectos Visuales de la serie de Netflix “Asalto al Banco Central”
                <br />
                Producida por Brutal Media | Grupo BBC Studios y dirigida por Daniel Calparsoro.
                <br />
                Felicidades a todo el equipo de Lamppost VFX!!! 💡
              </p>
            </div>

            <div className="post-actions">
              <button className="like-btn"><FaHeart /></button>
              <button className="comment-btn"><FaComment /></button>
              <button className="share-btn"><FaShare /></button>
            </div>
          </div>

          {/* Post 2 */}
          <div className="post">
            <div className="post-header">
              <img src="/images/profile2.jpg" alt="Foto de perfil" className="profile-pic" />
              <span className="username">OtroUsuario</span>
            </div>

            <div className="post-frame">
              <div className="film-hole left"></div>
              <div className="film-hole right"></div>

              <img src="/images/Post2.jpeg" alt="Post 2" className="post-image" />
              <p className="post-text">
                <strong>#ISE2025</strong> és la fira anual més influent del món en tecnologia audiovisual i ha aterrat aquesta setmana a Barcelona 👋🏼
                <br /><br />
                Com a professionals del sector, ens interessa seguir de prop les innovacions en les tecnologies d’avantguarda i estar al dia de les tendències...
              </p>
            </div>

            <div className="post-actions">
              <button className="like-btn"><FaHeart /></button>
              <button className="comment-btn"><FaComment /></button>
              <button className="share-btn"><FaShare /></button>
            </div>
          </div>

          {/* Post 3 */}
          <div className="post">
            <div className="post-header">
              <img src="/images/profile3.jpg" alt="Foto de perfil" className="profile-pic" />
              <span className="username">MiUsuario3</span>
            </div>

            <div className="post-frame">
              <div className="film-hole left"></div>
              <div className="film-hole right"></div>

              <img src="/images/Post3.jpeg" alt="Post 3" className="post-image" />
              <p className="post-text">
                Muy contentos de anunciar que “La Academia”, serie española producida por Brutal Media y Sony Pictures Entertainment para Prime Video &amp; Amazon MGM Studios y 3Cat Corporatiu, ha sido seleccionada como finalista en SEIS CATEGORÍAS...
              </p>
            </div>

            <div className="post-actions">
              <button className="like-btn"><FaHeart /></button>
              <button className="comment-btn"><FaComment /></button>
              <button className="share-btn"><FaShare /></button>
            </div>
          </div>
        </section>

        {/* Columna Derecha: Próximos eventos */}
        <aside className="events-container">
          <h3>Próximos eventos</h3>
          <div className="event">
            <div className="event-info">
              <span className="event-title">Estreno: Película XYZ</span>
              <span className="event-date">12/04/2025</span>
            </div>
          </div>
          <div className="event">
            <div className="event-info">
              <span className="event-title">Estreno: Película ABC</span>
              <span className="event-date">15/04/2025</span>
            </div>
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
}

export default Community;
