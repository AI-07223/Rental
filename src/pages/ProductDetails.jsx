// src/pages/ProductDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { siteConfig } from '../config';
import { useCart } from '../context/CartContext';
import { ChevronRight, ArrowLeft, Heart, Share2, Truck, Shield, RotateCcw, Ruler, ZoomIn, ShoppingBag, Check } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = siteConfig.products.find(p => p.id === id);
  const { categories, products } = siteConfig;

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
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [addedToCart, setAddedToCart] = useState(false);

  // Re-initialize default options if product changes
  useEffect(() => {
    if (product && product.options) {
      const defaults = {};
      Object.keys(product.options).forEach(key => {
        defaults[key] = product.options[key][0];
      });
      setSelectedOptions(defaults);
      setActiveImage(0);
      setAddedToCart(false);
    }
  }, [product?.id]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#FDFBF7]">
        <h2 className="text-2xl font-serif text-gray-800 mb-4">Product not found</h2>
        <Link to="/products" className="text-[#8B0000] hover:underline">
          Browse all products
        </Link>
      </div>
    );
  }

  const handleOptionChange = (optionName, value) => {
    setSelectedOptions(prev => ({
      ...prev,
      [optionName]: value
    }));
    setAddedToCart(false);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedOptions, 1);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleMouseMove = (e) => {
    if (!isZoomed) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  // Get related products (same category, excluding current)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // Get category name
  const categoryName = categories.find(c => c.id === product.category)?.name || '';

  return (
    <div className="bg-[#FDFBF7] min-h-screen pb-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400">
          <Link to="/" className="hover:text-[#8B0000]">Home</Link>
          <ChevronRight size={12} />
          <Link to={`/category/${product.category}`} className="hover:text-[#8B0000]">{categoryName}</Link>
          <ChevronRight size={12} />
          <span className="text-gray-800">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">

          {/* Image Gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            {/* Thumbnail List (Desktop) */}
            <div className="hidden lg:flex flex-col gap-4 w-24">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-[3/4] overflow-hidden border-2 transition-all ${activeImage === idx
                      ? 'border-[#8B0000]'
                      : 'border-transparent hover:border-gray-300'
                    }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div
              className="flex-1 aspect-[3/4] bg-gray-100 overflow-hidden relative cursor-zoom-in"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
            >
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-transform duration-300"
                style={isZoomed ? {
                  transform: 'scale(2)',
                  transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
                } : {}}
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <ZoomIn size={18} className="text-gray-700" />
                </button>
              </div>
            </div>

            {/* Thumbnail List (Mobile) */}
            <div className="flex lg:hidden gap-3 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`flex-shrink-0 w-20 aspect-[3/4] overflow-hidden border-2 ${activeImage === idx ? 'border-[#8B0000]' : 'border-transparent'
                    }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="mt-10 lg:mt-0 lg:sticky lg:top-32 h-fit">
            {/* Category */}
            <Link
              to={`/category/${product.category}`}
              className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase hover:text-[#8B0000] transition-colors"
            >
              {categoryName}
            </Link>

            {/* Title & Price */}
            <h1 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] tracking-wide mt-2 mb-4">
              {product.name}
            </h1>
            <p className="text-2xl text-[#8B0000] font-serif mb-6">
              {product.price}
            </p>

            {/* Description */}
            <div className="prose prose-sm text-gray-600 mb-8 leading-relaxed">
              <p>{product.description}</p>
            </div>

            {/* Options Selector */}
            {product.options && Object.entries(product.options).map(([optionName, values]) => (
              <div key={optionName} className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-medium text-[#1A1A1A] uppercase tracking-wide">
                    {optionName}: <span className="text-gray-500 font-normal">{selectedOptions[optionName]}</span>
                  </h3>
                  {optionName.toLowerCase().includes('size') && (
                    <button
                      onClick={() => setShowSizeGuide(true)}
                      className="text-xs text-[#8B0000] flex items-center gap-1 hover:underline"
                    >
                      <Ruler size={14} />
                      Size Guide
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap gap-3">
                  {values.map((value) => (
                    <button
                      key={value}
                      onClick={() => handleOptionChange(optionName, value)}
                      className={`
                        px-5 py-2.5 text-sm border-2 transition-all duration-200
                        ${selectedOptions[optionName] === value
                          ? 'border-[#8B0000] bg-[#8B0000] text-white'
                          : 'border-gray-200 text-gray-700 hover:border-[#8B0000]'
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
                onClick={handleAddToCart}
                disabled={addedToCart}
                className={`w-full py-4 px-8 uppercase tracking-[0.15em] font-medium transition-all duration-300 flex items-center justify-center gap-3 ${addedToCart
                    ? 'bg-green-600 text-white'
                    : 'bg-gradient-to-r from-[#8B0000] to-[#5C0A0A] text-white hover:from-[#5C0A0A] hover:to-[#8B0000]'
                  }`}
              >
                {addedToCart ? (
                  <>
                    <Check size={18} />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag size={18} />
                    Add to Cart
                  </>
                )}
              </button>

              <div className="flex gap-4">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`flex-1 py-3 px-6 border-2 uppercase tracking-wide text-sm font-medium flex items-center justify-center gap-2 transition-all ${isWishlisted
                      ? 'border-[#8B0000] bg-[#8B0000] text-white'
                      : 'border-gray-200 text-gray-700 hover:border-[#8B0000]'
                    }`}
                >
                  <Heart size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
                  {isWishlisted ? 'Wishlisted' : 'Wishlist'}
                </button>
                <button className="py-3 px-6 border-2 border-gray-200 text-gray-700 hover:border-[#8B0000] transition-colors">
                  <Share2 size={18} />
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <Truck className="w-6 h-6 mx-auto mb-2 text-[#8B0000]" strokeWidth={1.5} />
                  <p className="text-xs text-gray-500">Free Shipping</p>
                </div>
                <div>
                  <Shield className="w-6 h-6 mx-auto mb-2 text-[#8B0000]" strokeWidth={1.5} />
                  <p className="text-xs text-gray-500">Authentic</p>
                </div>
                <div>
                  <RotateCcw className="w-6 h-6 mx-auto mb-2 text-[#8B0000]" strokeWidth={1.5} />
                  <p className="text-xs text-gray-500">15-Day Returns</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-24 pt-16 border-t border-gray-200">
            <div className="flex justify-between items-end mb-10">
              <div>
                <span className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-2 block">
                  You May Also Like
                </span>
                <h2 className="text-2xl md:text-3xl font-serif text-[#1A1A1A]">
                  Related Products
                </h2>
              </div>
              <Link
                to={`/category/${product.category}`}
                className="text-sm text-[#8B0000] hover:underline uppercase tracking-wide"
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Size Guide Modal */}
      {showSizeGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowSizeGuide(false)} />
          <div className="relative bg-white max-w-lg w-full p-8 max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setShowSizeGuide(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
            <h3 className="font-serif text-2xl text-[#1A1A1A] mb-6">Size Guide</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Size</th>
                  <th className="text-left py-2">Bust (in)</th>
                  <th className="text-left py-2">Waist (in)</th>
                  <th className="text-left py-2">Hip (in)</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b"><td className="py-2">XS</td><td>32-34</td><td>24-26</td><td>34-36</td></tr>
                <tr className="border-b"><td className="py-2">S</td><td>34-36</td><td>26-28</td><td>36-38</td></tr>
                <tr className="border-b"><td className="py-2">M</td><td>36-38</td><td>28-30</td><td>38-40</td></tr>
                <tr className="border-b"><td className="py-2">L</td><td>38-40</td><td>30-32</td><td>40-42</td></tr>
                <tr><td className="py-2">XL</td><td>40-42</td><td>32-34</td><td>42-44</td></tr>
              </tbody>
            </table>
            <p className="text-xs text-gray-400 mt-4">
              For custom sizing, please contact us with your measurements.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
