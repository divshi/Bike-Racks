
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">🚴‍♂️</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Bicycles</li>
          <li>Accessories</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
        <div className="cart">
          <span>$0.00</span>
          <span>🛒</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
