// src/components/NewArrivals.js

import React from 'react';
import ProductCard from './ProductCard';
import './NewArrivals.css';
import cycle1 from '../assets/bicycle-7.jpg';
import cycle2 from '../assets/bicycle-1.jpg';
import cycle3 from '../assets/bicycle-5.jpg';
import cycle4 from '../assets/bicycle-4.jpg';

const products = [
  { id: 1, name: 'Kryo X26 MTB - Model K', price: '$350.00', image: cycle1 },
  { id: 2, name: 'Kryo X26 MTB - Model X', price: '$350.00', image: cycle2 }, 
  { id: 3, name: 'Kryo X26 MTB - Model Y', price: '$350.00', image: cycle3 }, 
  { id: 4, name: 'Kryo X26 MTB - Model Z', price: '$350.00', image: cycle4 }, 
];

function NewArrivals() {
  return (
    <section className="new-arrivals">
      <h2>New Arrivals</h2>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default NewArrivals;
