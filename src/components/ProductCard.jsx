// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative overflow-hidden bg-gray-100 aspect-[3/4] mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        {/* Overlay or Tag could go here */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
      </div>

      <div className="text-center">
        <h3 className="text-sm font-medium text-gray-900 group-hover:text-pink-500 transition-colors uppercase tracking-wide truncate px-2">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-gray-500 font-serif">
          {product.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
