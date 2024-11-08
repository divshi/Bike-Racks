// src/components/NewArrivals.js

import React from 'react';
import ProductCard from './ProductCard';
import './NewArrivals.css';

const products = [
  { id: 1, name: 'Kryo X26 MTB - Model K', price: '$350.00' },
  { id: 2, name: 'Kryo X26 MTB - Model X', price: '$350.00' },
  { id: 3, name: 'Kryo X26 MTB - Model Y', price: '$350.00' },
  { id: 4, name: 'Kryo X26 MTB - Model Z', price: '$350.00' },
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
