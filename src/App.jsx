// src/App.js

import React from 'react';
import HeroSection from './components/HeroSection';
import NewArrivals from './components/NewArrivals';
import './index.css';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <NewArrivals />
    </div>
  );
}

export default App;
