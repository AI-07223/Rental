// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config';
import { Instagram, Facebook, MapPin, Phone, Mail, CreditCard, Shield } from 'lucide-react';

const Footer = () => {
  const { siteDetails } = siteConfig;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <h3 className="font-serif text-2xl tracking-[0.15em] text-white mb-1">
                MILI'S COUTURE
              </h3>
              <p className="text-[#D4AF37] text-xs tracking-[0.3em]">EST. 2024</p>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Where tradition meets timeless elegance. Handcrafted couture for your most precious moments.
            </p>
            <div className="flex space-x-4">
              <a
                href={siteDetails.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href={siteDetails.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-[0.2em] mb-6 text-[#D4AF37]">
              Shop
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/category/lehenga" className="text-gray-400 hover:text-white transition-colors">
                  Bridal Lehengas
                </Link>
              </li>
              <li>
                <Link to="/category/saree" className="text-gray-400 hover:text-white transition-colors">
                  Sarees
                </Link>
              </li>
              <li>
                <Link to="/category/gown" className="text-gray-400 hover:text-white transition-colors">
                  Gowns
                </Link>
              </li>
              <li>
                <Link to="/category/sherwani" className="text-gray-400 hover:text-white transition-colors">
                  Groom Wear
                </Link>
              </li>
              <li>
                <Link to="/category/jewellery" className="text-gray-400 hover:text-white transition-colors">
                  Jewellery
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-[#D4AF37] hover:text-white transition-colors">
                  View All →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-[0.2em] mb-6 text-[#D4AF37]">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-gray-400 hover:text-white transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-[0.2em] mb-6 text-[#D4AF37]">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-[#D4AF37]" />
                <span className="text-gray-400">{siteDetails.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="flex-shrink-0 text-[#D4AF37]" />
                <a href={`tel:${siteDetails.phone}`} className="text-gray-400 hover:text-white transition-colors">
                  {siteDetails.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="flex-shrink-0 text-[#D4AF37]" />
                <a href={`mailto:${siteDetails.email}`} className="text-gray-400 hover:text-white transition-colors">
                  {siteDetails.email}
                </a>
              </li>
            </ul>

            {/* Trust Badges */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <Shield size={16} />
                <span>Secure Checkout</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <CreditCard size={16} />
                <span>Easy Payments</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              © {currentYear} {siteDetails.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
