// src/components/ProductCard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { siteConfig } from '../config';

const ProductCard = ({ product, viewMode = 'grid' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  // Check if product is "new" (using simple logic - could be from API)
  const isNew = product.id === 'prod_001' || product.id === 'prod_004';

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Get default options for the product
    const defaultOptions = {};
    if (product.options) {
      Object.keys(product.options).forEach(key => {
        defaultOptions[key] = product.options[key][0];
      });
    }

    addToCart(product, defaultOptions, 1);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  if (viewMode === 'list') {
    return (
      <div className="group flex gap-6 bg-gradient-to-r from-white to-gray-50 p-4 hover:shadow-xl hover:shadow-black/5 transition-all duration-500 border border-gray-100 hover:border-[#D4AF37]/30">
        <Link to={`/product/${product.id}`} className="w-32 h-40 flex-shrink-0 overflow-hidden bg-gray-100">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </Link>
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <Link to={`/product/${product.id}`} className="font-serif text-lg text-[#1A1A1A] group-hover:text-[#8B0000] transition-colors duration-300">
              {product.name}
            </Link>
            <p className="bg-gradient-to-r from-[#8B0000] to-[#A52A2A] bg-clip-text text-transparent font-serif text-lg mt-1">{product.price}</p>
            <p className="text-gray-500 text-sm mt-2 line-clamp-2">{product.description}</p>
          </div>
          <button
            onClick={handleAddToCart}
            className={`mt-3 px-4 py-2 text-sm uppercase tracking-wide transition-all duration-300 flex items-center gap-2 w-fit ${addedToCart
                ? 'bg-green-600 text-white'
                : 'bg-[#8B0000] text-white hover:bg-[#5C0A0A]'
              }`}
          >
            {addedToCart ? <><Check size={14} /> Added</> : <><ShoppingBag size={14} /> Add to Cart</>}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-gradient-to-b from-gray-100 to-gray-50 aspect-[3/4] mb-4">
          {/* Main Image */}
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-1000 ease-out"
          />

          {/* Secondary Image on Hover (if available) */}
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt={product.name}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            />
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* New Badge */}
          {isNew && (
            <div className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white text-xs uppercase tracking-wider font-medium shadow-lg">
              New
            </div>
          )}

          {/* Quick Actions */}
          <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-all duration-500 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsWishlisted(!isWishlisted);
              }}
              className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110 ${isWishlisted
                  ? 'bg-gradient-to-br from-[#8B0000] to-[#5C0A0A] text-white shadow-lg'
                  : 'bg-white/90 text-gray-700 hover:bg-gradient-to-br hover:from-[#8B0000] hover:to-[#5C0A0A] hover:text-white'
                }`}
            >
              <Heart size={18} fill={isWishlisted ? 'currentColor' : 'none'} />
            </button>
          </div>

          {/* Add to Cart Button */}
          <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button
              onClick={handleAddToCart}
              className={`flex items-center justify-center gap-2 w-full py-3 uppercase text-xs tracking-[0.15em] font-medium transition-all duration-500 shadow-lg ${addedToCart
                  ? 'bg-green-600 text-white'
                  : 'bg-gradient-to-r from-white via-white to-white/95 text-[#1A1A1A] hover:from-[#8B0000] hover:to-[#5C0A0A] hover:text-white'
                }`}
            >
              {addedToCart ? (
                <>
                  <Check size={14} />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingBag size={14} />
                  Add to Cart
                </>
              )}
            </button>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#8B0000] transition-colors duration-300 uppercase tracking-wide">
            {product.name}
          </h3>
          <p className="mt-1 text-sm font-serif bg-gradient-to-r from-gray-600 to-gray-500 bg-clip-text text-transparent group-hover:from-[#8B0000] group-hover:to-[#A52A2A] transition-all duration-500">
            {product.price}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
