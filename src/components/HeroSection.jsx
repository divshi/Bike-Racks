// src/components/HeroSection.js

import React from 'react';
import './HeroSection.css';
import logo from '../assets/logo.png'; 
import cart_icon from '../assets/cart_icon.png'
import point from '../assets/point.png';

function HeroSection() {
  return (
    <div className="hero-container"> 
      <header className="header">
        <nav className="navbar">
          <div className="logo"> <img width="90px" src={logo} alt="" /></div>
          <ul className="nav-links">
            <li>HOME</li>
            <li>BICYCLES</li>
            <li>ACCESSORIES</li>
            <li>ABOUT US</li>
            <li>CONTACT</li>
          </ul>
          <div className="cart">
            <span>$0.00</span>
            <img className="nav-login-cart" src={cart_icon} alt="Cart icon" />
            <div className="nav-cart-count">0</div>
          </div>
        </nav>
      </header>
      <section className="hero">
        <div className="hero-content">
          <h2>Newly Launched</h2>
          <h1>Kryo X26 </h1>
          <h1>MTB</h1>
          <p>Specifications:</p>
          <ul className='list'>
            <li>⦾ &nbsp; &nbsp; Lightweight 18" Frame</li>
            <li>⦾ &nbsp; &nbsp; Steel Suspension Fork</li>
            <li>⦾ &nbsp; &nbsp; Steel Hardtail Frame</li>
          </ul>
          <div className="button">
          <button className="buy-now">BUY NOW</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
