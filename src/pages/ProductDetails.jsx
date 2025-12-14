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
      // Only update if options actually change (simple ref check or comparison could be added,
      // but for now relying on product dependency is safer if logic is sound)
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
    <div className="bg-white min-h-screen pb-20">

      {/* Breadcrumb / Back */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button onClick={() => navigate(-1)} className="flex items-center text-sm text-gray-500 hover:text-pink-500 transition-colors">
          <ArrowLeft size={16} className="mr-1" /> Back
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">

          {/* Image Gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
             {/* Thumbnail List (Desktop) */}
             <div className="hidden lg:flex flex-col gap-4 w-20">
               {product.images.map((img, idx) => (
                 <button
                   key={idx}
                   onClick={() => setActiveImage(idx)}
                   className={`aspect-[3/4] overflow-hidden border-2 transition-colors ${activeImage === idx ? 'border-pink-300' : 'border-transparent hover:border-gray-200'}`}
                 >
                   <img src={img} alt="" className="w-full h-full object-cover" />
                 </button>
               ))}
             </div>

             {/* Main Image */}
             <div className="flex-1 aspect-[3/4] bg-gray-100 overflow-hidden relative">
               <img
                 src={product.images[activeImage]}
                 alt={product.name}
                 className="w-full h-full object-cover object-center"
               />
             </div>

             {/* Thumbnail List (Mobile) */}
             <div className="flex lg:hidden gap-3 overflow-x-auto pb-2">
               {product.images.map((img, idx) => (
                 <button
                   key={idx}
                   onClick={() => setActiveImage(idx)}
                   className={`flex-shrink-0 w-20 aspect-[3/4] overflow-hidden border-2 ${activeImage === idx ? 'border-pink-300' : 'border-transparent'}`}
                 >
                   <img src={img} alt="" className="w-full h-full object-cover" />
                 </button>
               ))}
             </div>
          </div>

          {/* Product Info */}
          <div className="mt-10 lg:mt-0 lg:sticky lg:top-24 h-fit">
            <h1 className="text-3xl font-serif text-gray-900 tracking-wide mb-2">
              {product.name}
            </h1>
            <p className="text-xl text-gray-500 font-serif mb-6">
              {product.price}
            </p>

            <div className="prose prose-sm text-gray-500 mb-8">
              <p>{product.description}</p>
            </div>

            {/* Options Selector */}
            {product.options && Object.entries(product.options).map(([optionName, values]) => (
              <div key={optionName} className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wide mb-3">
                  {optionName}: <span className="text-gray-500 ml-1 font-normal">{selectedOptions[optionName]}</span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {values.map((value) => (
                    <button
                      key={value}
                      onClick={() => handleOptionChange(optionName, value)}
                      className={`
                        px-4 py-2 text-sm border transition-all duration-200
                        ${selectedOptions[optionName] === value
                          ? 'border-black bg-black text-white'
                          : 'border-gray-200 text-gray-700 hover:border-gray-400'
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
            <div className="mt-10 pt-6 border-t border-gray-100">
              <button
                onClick={handleBuyClick}
                className="w-full bg-green-600 text-white py-4 px-8 uppercase tracking-widest font-medium hover:bg-green-700 transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                 <span>Order on WhatsApp</span>
                 <ChevronRight size={18} />
              </button>
              <p className="mt-4 text-xs text-center text-gray-400">
                Secure checkout via WhatsApp. Our team will confirm availability and shipping details.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
