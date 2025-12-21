// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { generateWhatsAppLink } from '../utils/whatsapp';

const ProductCard = ({ product }) => {
  const handleOrderClick = (e) => {
    e.preventDefault(); // Prevent navigation to product page
    // Use utility for consistent message formatting
    // We pass empty options since the card view doesn't select size/color
    const link = generateWhatsAppLink(product, {});
    window.open(link, '_blank');
  };

  return (
    <Link to={`/product/${product.id}`} className="group block text-center">
      <div className="relative overflow-hidden mb-4 aspect-[3/4] bg-gray-50">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />

        {/* Hover Action Button (Dresszilla style: "Add to cart" overlay on hover? Text dump implies visible button.
           Reference image usually shows a button appearing or always there.
           I will go with a clean slide-up "Order Now" to match the 'Cart' behavior but for WhatsApp) */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
            <button
              onClick={handleOrderClick}
              className="w-full bg-white/95 hover:bg-black hover:text-white text-black text-xs font-bold uppercase tracking-widest py-3 transition-colors shadow-sm"
            >
              Order Now
            </button>
        </div>

        {/* Sale Badge */}
        {product.originalPrice && (
           <span className="absolute top-3 left-3 bg-white text-black text-[10px] font-bold px-2 py-1 uppercase tracking-widest shadow-sm">
             Sale!
           </span>
        )}
      </div>

      <div className="space-y-1.5 px-2">
        {/* Category Label */}
        <p className="text-[10px] text-gray-400 uppercase tracking-widest">
           {product.category === 'bridal' ? 'Lehenga' : 'New Arrivals'}
        </p>

        {/* Title */}
        <h3 className="text-sm font-serif text-gray-900 leading-snug">
          {product.name}
        </h3>

        {/* Price */}
        <p className="text-sm font-medium text-gray-900 font-sans mt-1">
          {product.originalPrice && (
            <span className="line-through text-gray-400 mr-2 font-light text-xs">{product.originalPrice}</span>
          )}
          {product.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
