// File: /client/src/components/Footer.js
// Function: Pie de página con logos de partners y textos adicionales.

import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="partners">
        <img src="/images/partner1.png" alt="Partner 1" />
        <img src="/images/partner2.png" alt="Partner 2" />
        <img src="/images/partner3.png" alt="Partner 3" />
        {/* Agrega más logos según necesites */}
      </div>
      <p>© 2025 My Crew. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
