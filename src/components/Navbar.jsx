// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { siteConfig } from '../config';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logoText, logoSubText } = siteConfig.siteDetails;
  const { colors } = siteConfig.theme;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar for Contact/Promo if needed - optional */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex flex-col items-center justify-center flex-1 md:flex-none">
            <Link to="/" className="text-center group">
               <div className="font-serif text-2xl tracking-widest font-bold" style={{ color: colors.text }}>
                 {logoText}
               </div>
               {logoSubText && (
                 <div className="text-[10px] tracking-[0.3em] text-gray-400 mt-1 group-hover:text-gray-600 transition-colors">
                   {logoSubText}
                 </div>
               )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-800 hover:text-pink-400 uppercase text-sm tracking-wide font-medium transition-colors">Home</Link>
            <Link to="/category/lehenga" className="text-gray-800 hover:text-pink-400 uppercase text-sm tracking-wide font-medium transition-colors">Lehengas</Link>
            <Link to="/category/saree" className="text-gray-800 hover:text-pink-400 uppercase text-sm tracking-wide font-medium transition-colors">Sarees</Link>
            <Link to="/category/tuxedo" className="text-gray-800 hover:text-pink-400 uppercase text-sm tracking-wide font-medium transition-colors">For Him</Link>
            <Link to="/category/jewellery" className="text-gray-800 hover:text-pink-400 uppercase text-sm tracking-wide font-medium transition-colors">Jewellery</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-pink-500 transition-colors">
              <Search size={20} />
            </button>
            {/* Cart icon - placeholder for now since we do direct WhatsApp buy, but keeps layout consistent */}
            <Link to="/" className="text-gray-600 hover:text-pink-500 transition-colors relative">
              <ShoppingBag size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-500 uppercase tracking-wide">Home</Link>
             {siteConfig.categories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/category/${cat.id}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-500 uppercase tracking-wide"
                >
                  {cat.name}
                </Link>
             ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
