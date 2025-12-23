// src/components/sections/BrandPhilosophy.jsx
import React from 'react';

const BrandPhilosophy = () => {
    return (
        <section className="py-24 md:py-32 bg-gradient-to-b from-[#FDFBF7] via-[#FFF8F0] to-[#FDFBF7] relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8B0000]/5 rounded-full blur-3xl" />

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <span className="inline-block text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in-up">
                    Our Philosophy
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1A1A1A] leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                    Where Tradition Meets
                    <span className="bg-gradient-to-r from-[#8B0000] to-[#A52A2A] bg-clip-text text-transparent italic"> Timeless Elegance</span>
                </h2>
                <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    At Mili's Couture, we believe every garment tells a story. Our designs blend the rich heritage
                    of Indian craftsmanship with contemporary sophistication, creating pieces that transcend seasons
                    and celebrate the art of dressing beautifully.
                </p>
                <div className="mt-12 flex justify-center gap-8 md:gap-12 text-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                    <div className="group cursor-default">
                        <span className="text-4xl md:text-5xl font-serif bg-gradient-to-b from-[#8B0000] to-[#5C0A0A] bg-clip-text text-transparent group-hover:from-[#D4AF37] group-hover:to-[#B8860B] transition-all duration-500">15+</span>
                        <p className="text-sm text-gray-500 uppercase tracking-widest mt-2">Years of Excellence</p>
                    </div>
                    <div className="w-px bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent" />
                    <div className="group cursor-default">
                        <span className="text-4xl md:text-5xl font-serif bg-gradient-to-b from-[#8B0000] to-[#5C0A0A] bg-clip-text text-transparent group-hover:from-[#D4AF37] group-hover:to-[#B8860B] transition-all duration-500">5000+</span>
                        <p className="text-sm text-gray-500 uppercase tracking-widest mt-2">Happy Brides</p>
                    </div>
                    <div className="w-px bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent" />
                    <div className="group cursor-default">
                        <span className="text-4xl md:text-5xl font-serif bg-gradient-to-b from-[#8B0000] to-[#5C0A0A] bg-clip-text text-transparent group-hover:from-[#D4AF37] group-hover:to-[#B8860B] transition-all duration-500">100+</span>
                        <p className="text-sm text-gray-500 uppercase tracking-widest mt-2">Master Artisans</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandPhilosophy;
