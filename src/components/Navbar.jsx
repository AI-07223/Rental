// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, User, ChevronDown, ChevronRight } from 'lucide-react';
import { siteConfig } from '../config';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const { logoText, logoSubText, topBarText } = siteConfig.siteDetails;
  const { colors, fonts } = siteConfig.theme;
  const { navigation } = siteConfig;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileExpand = (name) => {
    setMobileExpanded(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <>
      {/* Top Bar */}
      {topBarText && (
         <div className="bg-white text-black text-center text-[11px] tracking-[0.2em] uppercase py-2 border-b border-gray-100 font-sans">
           {topBarText}
           <button className="absolute right-4 top-2 text-gray-400 hover:text-black">
             <X size={14} />
           </button>
         </div>
      )}

      <nav
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? 'shadow-sm py-2' : 'py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 items-center">

            {/* Left: Navigation (Desktop) / Hamburger (Mobile) */}
            <div className="flex items-center justify-start">
               {/* Mobile Menu Trigger */}
               <div className="lg:hidden">
                 <button
                   onClick={() => setIsOpen(true)}
                   className="text-gray-800 hover:text-black focus:outline-none"
                 >
                   <Menu size={24} strokeWidth={1.5} />
                 </button>
               </div>

               {/* Desktop Links */}
               <div className="hidden lg:flex items-center space-x-6">
                 {navigation.map((item) => (
                   <div key={item.name} className="relative group">
                     {item.type === 'dropdown' ? (
                       <button className="flex items-center text-[11px] font-bold uppercase tracking-[0.15em] hover:text-gray-500 transition-colors py-2">
                         {item.name}
                         <ChevronDown size={12} className="ml-1" />
                       </button>
                     ) : (
                       <Link to={item.path} className="text-[11px] font-bold uppercase tracking-[0.15em] hover:text-gray-500 transition-colors py-2 block">
                         {item.name}
                       </Link>
                     )}

                     {/* Desktop Dropdown Panel */}
                     {item.type === 'dropdown' && (
                       <div className="absolute top-full left-0 w-56 bg-white border border-gray-100 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                         <div className="py-2">
                           {item.items.map((subItem) => (
                             <Link
                               key={subItem.name}
                               to={subItem.path}
                               className="block px-6 py-2.5 text-sm text-gray-500 hover:text-black hover:bg-gray-50 transition-colors font-light"
                             >
                               {subItem.name}
                             </Link>
                           ))}
                         </div>
                       </div>
                     )}
                   </div>
                 ))}
               </div>
            </div>

            {/* Center: Logo */}
            <div className="flex flex-col items-center justify-center text-center">
              <Link to="/" className="group">
                 <h1 className="text-2xl md:text-4xl font-bold tracking-[0.15em] uppercase leading-none" style={{ fontFamily: fonts.primary }}>
                   {logoText}
                 </h1>
                 {logoSubText && (
                   <span className="text-[10px] tracking-[0.4em] uppercase text-gray-400 mt-1 block">
                     {logoSubText}
                   </span>
                 )}
              </Link>
            </div>

            {/* Right: Icons */}
            <div className="flex items-center justify-end space-x-6">
              <div className="hidden md:flex items-center border-b border-gray-300 pb-1 mr-4">
                 <input
                   type="text"
                   placeholder="SEARCH"
                   className="bg-transparent border-none focus:ring-0 text-[10px] tracking-[0.2em] w-20 placeholder-gray-400 font-medium"
                 />
                 <Search size={14} className="text-gray-400" />
              </div>
              <button className="text-gray-800 hover:text-black transition-colors hidden md:block">
                <User size={20} strokeWidth={1.5} />
              </button>
              <Link to="/" className="text-gray-800 hover:text-black transition-colors relative">
                <ShoppingBag size={20} strokeWidth={1.5} />
                <span className="absolute -top-1 -right-1 bg-black text-white text-[9px] w-3.5 h-3.5 flex items-center justify-center rounded-full">0</span>
              </Link>
            </div>

          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-black/50 z-[60] lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsOpen(false)}></div>

        {/* Mobile Sidebar */}
        <div className={`fixed inset-y-0 left-0 w-[80%] max-w-sm bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-between items-center p-5 border-b border-gray-100">
             <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Menu</span>
             <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-black">
               <X size={24} strokeWidth={1.5} />
             </button>
          </div>

          <div className="overflow-y-auto h-[calc(100vh-65px)]">
             <div className="p-5 space-y-4">
                {/* Search in Mobile */}
                <div className="relative mb-6">
                  <input type="text" placeholder="Search for products..." className="w-full bg-gray-50 border border-gray-200 py-3 px-4 text-sm outline-none focus:border-black transition-colors" />
                  <Search size={16} className="absolute right-4 top-3.5 text-gray-400" />
                </div>

                {navigation.map((item) => (
                  <div key={item.name} className="border-b border-gray-100 pb-2">
                    {item.type === 'dropdown' ? (
                      <div>
                        <button
                          onClick={() => toggleMobileExpand(item.name)}
                          className="w-full flex justify-between items-center py-2 text-sm font-bold uppercase tracking-widest text-gray-900"
                        >
                          {item.name}
                          {mobileExpanded[item.name] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                        </button>
                        <div className={`pl-4 space-y-3 overflow-hidden transition-all duration-300 ${mobileExpanded[item.name] ? 'max-h-96 mt-2 pb-2' : 'max-h-0'}`}>
                           {item.items.map(subItem => (
                             <Link
                               key={subItem.name}
                               to={subItem.path}
                               onClick={() => setIsOpen(false)}
                               className="block text-sm text-gray-500 hover:text-black font-light"
                             >
                               {subItem.name}
                             </Link>
                           ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 text-sm font-bold uppercase tracking-widest text-gray-900"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                <Link to="/category/jewellery" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-bold uppercase tracking-widest text-gray-900 border-b border-gray-100">
                  Jewellery
                </Link>
             </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
