// File: /client/src/components/Carousel.js
// Function: Carrusel sin flechas que cambia automáticamente.

import React, { useState, useEffect } from 'react';
import '../styles/carousel.css';

function Carousel({ slides, interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, interval);
    return () => clearInterval(timer);
  }, [slides, interval]);

  return (
    <div className="carousel">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`carousel-item ${idx === currentIndex ? 'active' : ''}`}
        >
          <img src={slide.image} alt={`Slide ${idx + 1}`} />
          <div className="slide-text">
            <h3>{slide.role}</h3>
            <p>{slide.testimonial}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Carousel;
