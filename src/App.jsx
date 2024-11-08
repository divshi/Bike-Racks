// src/App.js

import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import NewArrivals from './components/NewArrivals';
import './Index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <NewArrivals />
    </div>
  );
}

export default App;
