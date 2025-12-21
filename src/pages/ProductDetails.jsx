// src/pages/ProductDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { siteConfig } from '../config';
import { generateWhatsAppLink } from '../utils/whatsapp';
import { ChevronRight, ArrowLeft } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = siteConfig.products.find(p => p.id === id);

  // State for selected options
  const [selectedOptions, setSelectedOptions] = useState(() => {
    if (product && product.options) {
      const defaults = {};
      Object.keys(product.options).forEach(key => {
        defaults[key] = product.options[key][0];
      });
      return defaults;
    }
    return {};
  });
  const [activeImage, setActiveImage] = useState(0);

  // Re-initialize default options if product changes
  useEffect(() => {
    if (product && product.options) {
      const defaults = {};
      Object.keys(product.options).forEach(key => {
        defaults[key] = product.options[key][0];
      });
      setSelectedOptions(defaults);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product?.id]);

  if (!product) {
    return <div className="text-center py-20">Product not found.</div>;
  }

  const handleOptionChange = (optionName, value) => {
    setSelectedOptions(prev => ({
      ...prev,
      [optionName]: value
    }));
  };

  const handleBuyClick = () => {
    const link = generateWhatsAppLink(product, selectedOptions);
    window.open(link, '_blank');
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-16">

          {/* Image Gallery - Stacked on Mobile, Side by side on Desktop */}
          <div className="flex flex-col gap-4">
             <div className="aspect-[3/4] bg-gray-50 overflow-hidden w-full">
               <img
                 src={product.images[activeImage]}
                 alt={product.name}
                 className="w-full h-full object-cover object-center"
               />
             </div>
             {/* Thumbs */}
             {product.images.length > 1 && (
               <div className="flex gap-4 overflow-x-auto pb-2">
                 {product.images.map((img, idx) => (
                   <button
                     key={idx}
                     onClick={() => setActiveImage(idx)}
                     className={`w-24 aspect-[3/4] flex-shrink-0 overflow-hidden border ${activeImage === idx ? 'border-black' : 'border-transparent'}`}
                   >
                     <img src={img} alt="" className="w-full h-full object-cover" />
                   </button>
                 ))}
               </div>
             )}
          </div>

          {/* Product Info - Sticky */}
          <div className="mt-10 lg:mt-0 lg:sticky lg:top-32 h-fit">
            <h2 className="text-xs text-gray-500 tracking-[0.2em] uppercase mb-4">
               {product.category === 'bridal' ? 'Bridal Collection' : 'New Arrivals'}
            </h2>
            <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4 leading-tight">
              {product.name}
            </h1>
            <p className="text-2xl text-gray-500 font-serif mb-8">
              {product.price}
            </p>

            <div className="border-t border-b border-gray-100 py-6 mb-8">
              <p className="text-gray-600 leading-relaxed font-light">
                {product.description}
              </p>
            </div>

            {/* Options Selector */}
            {product.options && Object.entries(product.options).map(([optionName, values]) => (
              <div key={optionName} className="mb-8">
                <h3 className="text-xs font-bold text-black uppercase tracking-widest mb-4">
                  {optionName}: <span className="text-gray-500 font-normal ml-2">{selectedOptions[optionName]}</span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {values.map((value) => (
                    <button
                      key={value}
                      onClick={() => handleOptionChange(optionName, value)}
                      className={`
                        w-12 h-12 flex items-center justify-center text-sm border transition-all duration-200
                        ${selectedOptions[optionName] === value
                          ? 'border-black bg-black text-white'
                          : 'border-gray-200 text-gray-700 hover:border-black'
                        }
                      `}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {/* Action Buttons */}
            <div className="mt-10 space-y-4">
              <button
                onClick={handleBuyClick}
                className="w-full bg-black text-white py-4 px-8 uppercase tracking-[0.2em] text-sm font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-3"
              >
                 Order Now
              </button>
              <p className="text-[10px] uppercase tracking-widest text-center text-gray-400">
                Check availability via WhatsApp
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
