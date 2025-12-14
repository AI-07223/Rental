// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import { siteConfig } from '../config';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { logoText, logoSubText, topBarText } = siteConfig.siteDetails;
  const { colors, fonts } = siteConfig.theme;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    {topBarText && (
       <div className="fixed top-0 left-0 right-0 h-9 bg-black text-white flex items-center justify-center text-[10px] tracking-[0.2em] uppercase z-[60]">
         {topBarText}
       </div>
    )}
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'top-9 bg-white shadow-md py-2'
          : 'top-9 bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-black focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Left Nav */}
          <div className="hidden md:flex space-x-8 items-center flex-1">
             <Link to="/shop" className="text-sm uppercase tracking-widest hover:text-gray-500 transition-colors font-medium">Shop All</Link>
             <Link to="/category/bridal" className="text-sm uppercase tracking-widest hover:text-gray-500 transition-colors font-medium">For Her</Link>
             <Link to="/category/tuxedo" className="text-sm uppercase tracking-widest hover:text-gray-500 transition-colors font-medium">For Him</Link>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex flex-col items-center justify-center mx-auto md:px-4">
            <Link to="/" className="text-center group">
               <h1 className="text-2xl md:text-3xl font-bold tracking-[0.2em] uppercase" style={{ fontFamily: fonts.primary }}>
                 {logoText}
               </h1>
               {logoSubText && (
                 <span className="text-[10px] tracking-[0.4em] uppercase text-gray-500 mt-1 block">
                   {logoSubText}
                 </span>
               )}
            </Link>
          </div>

          {/* Desktop Right Icons */}
          <div className="flex items-center space-x-6 flex-1 justify-end">
            <div className="hidden md:flex items-center border-b border-black pb-1">
               <input type="text" placeholder="SEARCH" className="bg-transparent border-none focus:ring-0 text-xs tracking-widest w-24 placeholder-gray-800" />
               <Search size={16} />
            </div>
            <button className="text-gray-800 hover:text-gray-600 transition-colors hidden md:block">
              <User size={20} />
            </button>
            <Link to="/" className="text-gray-800 hover:text-gray-600 transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-xl h-screen">
          <div className="px-4 py-6 space-y-4">
             <div className="border-b border-gray-100 pb-2 mb-4">
               <input type="text" placeholder="Search..." className="w-full text-lg font-light outline-none" />
             </div>
             <Link to="/" onClick={() => setIsOpen(false)} className="block text-xl font-serif text-gray-800">Home</Link>
             <Link to="/category/bridal" onClick={() => setIsOpen(false)} className="block text-xl font-serif text-gray-800">For Her</Link>
             <Link to="/category/tuxedo" onClick={() => setIsOpen(false)} className="block text-xl font-serif text-gray-800">For Him</Link>
             <Link to="/category/jewellery" onClick={() => setIsOpen(false)} className="block text-xl font-serif text-gray-800">Jewellery</Link>
          </div>
        </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;
