// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, ChevronDown, User } from 'lucide-react';
import { siteConfig } from '../config';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const { logoText, logoSubText } = siteConfig.siteDetails;
  const { categories } = siteConfig;
  const { getCartCount, setIsCartOpen } = useCart();
  const cartCount = getCartCount();

  // Check if on homepage
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Always use dark text - fixed visibility issue
  // Only use transparent background on homepage when not scrolled
  const navBg = isScrolled || !isHome
    ? 'bg-white shadow-md'
    : 'bg-gradient-to-b from-black/40 to-transparent';

  // Text is always visible - white on transparent bg, dark on white bg
  const textColor = isScrolled || !isHome
    ? 'text-[#1A1A1A]'
    : 'text-white';

  const logoColor = isScrolled || !isHome
    ? 'text-[#8B0000]'
    : 'text-white';

  const hoverColor = isScrolled || !isHome
    ? 'hover:text-[#8B0000]'
    : 'hover:text-[#D4AF37]';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${textColor} ${hoverColor} focus:outline-none transition-colors`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop Nav - Left */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                to="/"
                className={`${textColor} ${hoverColor} uppercase text-xs tracking-[0.15em] font-medium transition-colors`}
              >
                Home
              </Link>

              {/* Collections Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <Link
                  to="/collections"
                  className={`flex items-center gap-1 ${textColor} ${hoverColor} uppercase text-xs tracking-[0.15em] font-medium transition-colors`}
                >
                  Collections
                  <ChevronDown size={14} className={`transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                </Link>

                {showDropdown && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white shadow-xl border-t-2 border-[#8B0000] min-w-[200px] py-4">
                      {categories.map(cat => (
                        <Link
                          key={cat.id}
                          to={`/category/${cat.id}`}
                          className="block px-6 py-2 text-sm text-gray-700 hover:text-[#8B0000] hover:bg-[#FDFBF7] transition-colors"
                        >
                          {cat.name}
                        </Link>
                      ))}
                      <div className="border-t border-gray-100 mt-2 pt-2">
                        <Link
                          to="/products"
                          className="block px-6 py-2 text-sm text-[#8B0000] font-medium hover:bg-[#FDFBF7]"
                        >
                          View All Products
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className={`${textColor} ${hoverColor} uppercase text-xs tracking-[0.15em] font-medium transition-colors`}
              >
                About
              </Link>
            </div>

            {/* Logo - Center */}
            <div className="flex-shrink-0 flex flex-col items-center justify-center">
              <Link to="/" className="text-center group">
                <div className={`font-serif text-xl md:text-2xl tracking-[0.2em] font-bold transition-colors ${logoColor}`}>
                  {logoText}
                </div>
                {logoSubText && (
                  <div className={`text-[9px] tracking-[0.3em] mt-0.5 transition-colors ${isScrolled || !isHome ? 'text-gray-400' : 'text-white/70'}`}>
                    {logoSubText}
                  </div>
                )}
              </Link>
            </div>

            {/* Desktop Nav - Right */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                to="/products"
                className={`${textColor} ${hoverColor} uppercase text-xs tracking-[0.15em] font-medium transition-colors`}
              >
                Shop
              </Link>
              <Link
                to="/contact"
                className={`${textColor} ${hoverColor} uppercase text-xs tracking-[0.15em] font-medium transition-colors`}
              >
                Contact
              </Link>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowSearch(true)}
                className={`${textColor} ${hoverColor} transition-colors`}
              >
                <Search size={20} />
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className={`relative ${textColor} ${hoverColor} transition-colors`}
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#8B0000] text-white text-xs rounded-full flex items-center justify-center font-medium">
                    {cartCount > 9 ? '9+' : cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <div className="bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-6 space-y-1">
              <Link
                to="/"
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-[#FDFBF7] hover:text-[#8B0000] uppercase tracking-wide"
              >
                Home
              </Link>
              <Link
                to="/collections"
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-[#FDFBF7] hover:text-[#8B0000] uppercase tracking-wide"
              >
                Collections
              </Link>

              {/* Categories in mobile */}
              <div className="pl-4 border-l-2 border-[#8B0000]/20 ml-4 space-y-1">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/category/${cat.id}`}
                    className="block px-4 py-2 text-sm text-gray-500 hover:text-[#8B0000]"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/products"
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-[#FDFBF7] hover:text-[#8B0000] uppercase tracking-wide"
              >
                Shop All
              </Link>
              <Link
                to="/cart"
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-[#FDFBF7] hover:text-[#8B0000] uppercase tracking-wide"
              >
                Cart ({cartCount})
              </Link>
              <Link
                to="/about"
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-[#FDFBF7] hover:text-[#8B0000] uppercase tracking-wide"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-[#FDFBF7] hover:text-[#8B0000] uppercase tracking-wide"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Modal */}
      {showSearch && (
        <div className="fixed inset-0 z-[60] bg-black/80 flex items-start justify-center pt-32">
          <div className="w-full max-w-2xl px-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-6 py-4 text-lg bg-white border-0 focus:ring-2 focus:ring-[#D4AF37] outline-none"
                autoFocus
              />
              <button
                onClick={() => setShowSearch(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>
            <p className="text-white/60 text-sm mt-4 text-center">
              Press ESC to close
            </p>
          </div>
          <button
            className="absolute top-8 right-8 text-white/60 hover:text-white"
            onClick={() => setShowSearch(false)}
          >
            <X size={32} />
          </button>
        </div>
      )}

      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;
