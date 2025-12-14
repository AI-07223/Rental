// src/components/Footer.jsx
import React from 'react';
import { siteConfig } from '../config';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const { siteDetails, theme } = siteConfig;

  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-serif text-xl font-bold tracking-widest mb-4" style={{ color: theme.colors.text }}>
              {siteDetails.name}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Crafting elegance for your special moments. Bespoke couture for him and her.
            </p>
            <div className="flex space-x-4">
              <a href={siteDetails.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href={siteDetails.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest mb-6 text-gray-800">Shop</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="/category/lehenga" className="hover:text-pink-500 transition-colors">Lehengas</a></li>
              <li><a href="/category/saree" className="hover:text-pink-500 transition-colors">Sarees</a></li>
              <li><a href="/category/tuxedo" className="hover:text-pink-500 transition-colors">Groom Wear</a></li>
              <li><a href="/category/gown" className="hover:text-pink-500 transition-colors">Gowns</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest mb-6 text-gray-800">Information</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-pink-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Shipping Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest mb-6 text-gray-800">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-start">
                <MapPin size={16} className="mt-1 mr-3 flex-shrink-0" />
                <span>{siteDetails.address}</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-3 flex-shrink-0" />
                <span>{siteDetails.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-3 flex-shrink-0" />
                <span>{siteDetails.email}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-200 mt-16 pt-8 text-center">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} {siteDetails.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
