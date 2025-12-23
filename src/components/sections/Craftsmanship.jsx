// src/components/sections/Craftsmanship.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Craftsmanship = () => {
    const crafts = [
        {
            title: "Hand Embroidery",
            description: "Intricate zardozi and threadwork by master artisans",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
        },
        {
            title: "Handloom Weaving",
            description: "Traditional Banarasi and Kanjeevaram techniques",
            image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80"
        },
        {
            title: "Bespoke Tailoring",
            description: "Custom fits crafted to perfection",
            image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80"
        }
    ];

    return (
        <section className="py-20 md:py-28 bg-[#FDFBF7]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-16">
                    <div>
                        <span className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4 block">
                            Heritage
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1A1A1A] leading-tight mb-6">
                            Crafted to
                            <span className="text-[#8B0000] italic"> Perfection</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Every Mili's Couture creation is a testament to India's rich textile heritage.
                            Our master artisans bring decades of skill, using time-honored techniques passed down
                            through generations to create pieces that are true works of art.
                        </p>
                        <Link
                            to="/category/lehenga"
                            className="inline-block px-8 py-3 bg-[#8B0000] text-white uppercase tracking-[0.15em] text-sm font-light hover:bg-[#5C0A0A] transition-colors duration-300"
                        >
                            Discover More
                        </Link>
                    </div>

                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&q=80"
                            alt="Craftsmanship"
                            className="w-full aspect-[4/5] object-cover"
                        />
                        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#D4AF37]/20 -z-10" />
                        <div className="absolute -top-8 -right-8 w-32 h-32 border-2 border-[#8B0000]/30 -z-10" />
                    </div>
                </div>

                {/* Craft Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {crafts.map((craft, index) => (
                        <div key={index} className="group relative overflow-hidden">
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={craft.image}
                                    alt={craft.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                                <h3 className="text-white font-serif text-xl mb-2">{craft.title}</h3>
                                <p className="text-white/70 text-sm">{craft.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Craftsmanship;
