// src/pages/Shop.jsx
import React from 'react';
import { siteConfig } from '../config';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const { products } = siteConfig;

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-100 py-16 text-center">
        <h1 className="text-4xl font-serif text-gray-900 tracking-wider uppercase mb-4">
          Shop All
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto px-4">
          Browse our complete collection of luxury rentals.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
