// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group block text-center">
      <div className="relative overflow-hidden mb-6 aspect-[3/4]">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
        />
        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-white/90 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center items-center">
           <span className="uppercase text-xs font-bold tracking-widest text-black">Order Now</span>
        </div>
        {/* Sale Badge */}
        {product.originalPrice && (
           <div className="absolute top-2 left-2 bg-black text-white text-[10px] px-2 py-1 uppercase tracking-wider">Sale</div>
        )}
      </div>

      <div className="space-y-1">
        <h3 className="text-sm text-gray-900 group-hover:text-gray-600 transition-colors uppercase tracking-[0.1em] font-medium">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 font-serif">
          {product.originalPrice && <span className="line-through mr-2 text-gray-300">{product.originalPrice}</span>}
          {product.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
