// src/components/Footer.jsx
import React from 'react';
import { siteConfig } from '../config';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const { siteDetails, theme } = siteConfig;

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20">

          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold tracking-[0.2em] mb-6 font-serif uppercase">
              {siteDetails.name}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              {siteDetails.topBarText} Where heirloom artistry meets modern elegance.
            </p>
            <div className="flex space-x-6">
              <a href={siteDetails.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
                <Instagram size={20} />
              </a>
              <a href={siteDetails.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-black">Shop</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-light">
              <li><a href="/category/bridal" className="hover:text-black transition-colors">Bridal Lehengas</a></li>
              <li><a href="/category/saree" className="hover:text-black transition-colors">Sarees</a></li>
              <li><a href="/category/tuxedo" className="hover:text-black transition-colors">Groom Wear</a></li>
              <li><a href="/category/gown" className="hover:text-black transition-colors">Occasion Gowns</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-black">Information</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-light">
              <li><a href="#" className="hover:text-black transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Book Appointment</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-black">Contact</h4>
            <ul className="space-y-6 text-sm text-gray-500 font-light">
              <li className="flex items-start">
                <MapPin size={16} className="mt-1 mr-4 flex-shrink-0 text-black" />
                <span className="leading-relaxed">{siteDetails.address}</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-4 flex-shrink-0 text-black" />
                <span>{siteDetails.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-4 flex-shrink-0 text-black" />
                <span>{siteDetails.email}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-100 mt-20 pt-10 text-center flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} {siteDetails.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
