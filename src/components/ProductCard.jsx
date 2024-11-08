// src/components/ProductCard.js

import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3 className='b'>Bicycles</h3>
      <h3>{product.name}</h3>
      <h3 className='star'>☆☆☆☆☆</h3>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductCard;
