// src/components/HeroSection.js

import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Newly Launched</h2>
        <h1>Kryo X26 MTB</h1>
        <p>Specifications:</p>
        <ul>
          <li>Lightweight 18" Frame</li>
          <li>Steel Suspension Fork</li>
          <li>Steel Hardtail Frame</li>
        </ul>
        <button className="buy-now">Buy Now</button>
      </div>
      <div className="hero-image">
        <img src="https://via.placeholder.com/600x400" alt="Kryo X26 MTB" />
      </div>
    </section>
  );
}

export default HeroSection;
