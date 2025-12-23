// src/components/sections/StoreVisit.jsx
import React from 'react';
import { MapPin, Phone, Clock, Calendar } from 'lucide-react';

const StoreVisit = () => {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
                    alt="Boutique Interior"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <span className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4 block animate-fade-in-up">
                        Experience Luxury
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                        Visit Our Boutique
                    </h2>
                    <p className="text-white/80 text-lg mb-12 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                        Step into our world of elegance. Our expert stylists await to help you find the perfect ensemble for your special occasions.
                    </p>

                    {/* Store Info Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        {[
                            { icon: MapPin, text: "Fashion Street, Delhi" },
                            { icon: Phone, text: "+91 98765 43210" },
                            { icon: Clock, text: "10AM - 8PM" },
                            { icon: Calendar, text: "Mon - Sat" }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 hover:bg-white/20 hover:border-[#D4AF37]/50 transition-all duration-500 animate-fade-in-up group"
                                style={{ animationDelay: `${(index + 3) * 100}ms` }}
                            >
                                <item.icon className="w-6 h-6 text-[#D4AF37] mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                                <p className="text-white text-sm">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                        <a
                            href="tel:+919876543210"
                            className="px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#1A1A1A] uppercase tracking-[0.15em] text-sm font-medium hover:from-white hover:to-white transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-[#D4AF37]/30"
                        >
                            Call Now
                        </a>
                        <a
                            href="https://wa.me/919876543210?text=Hi! I'd like to book an appointment"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative px-10 py-4 border-2 border-white text-white uppercase tracking-[0.15em] text-sm font-medium overflow-hidden group"
                        >
                            <span className="relative z-10 group-hover:text-[#1A1A1A] transition-colors duration-500">Book Appointment</span>
                            <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StoreVisit;
