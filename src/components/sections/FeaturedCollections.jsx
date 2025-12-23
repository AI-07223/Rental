// src/components/sections/FeaturedCollections.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeaturedCollections = ({ collections }) => {
    return (
        <section className="py-20 md:py-28 bg-gradient-to-b from-white via-[#FDFBF7] to-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
            <div className="absolute top-1/2 right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-[#D4AF37]/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4 block animate-fade-in-up">
                        Curated For You
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] tracking-wide animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                        Featured Collections
                    </h2>
                    <div className="h-0.5 w-16 bg-gradient-to-r from-[#8B0000] to-[#D4AF37] mx-auto mt-6 animate-fade-in-up" style={{ animationDelay: '200ms' }} />
                </div>

                <div className="space-y-8">
                    {collections.map((collection, index) => (
                        <Link
                            key={collection.id}
                            to={collection.link}
                            className={`group relative block overflow-hidden ${index % 2 === 0 ? 'md:ml-0 md:mr-20' : 'md:mr-0 md:ml-20'
                                } animate-fade-in-up`}
                            style={{ animationDelay: `${(index + 3) * 100}ms` }}
                        >
                            <div className="relative h-[50vh] md:h-[70vh] overflow-hidden">
                                <img
                                    src={collection.image}
                                    alt={collection.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                                />
                                {/* Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${index % 2 === 0
                                        ? 'from-black/70 via-black/40 to-transparent'
                                        : 'from-transparent via-black/40 to-black/70'
                                    } group-hover:opacity-90 transition-opacity duration-500`} />

                                {/* Shimmer effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

                                {/* Content */}
                                <div className={`absolute inset-0 flex flex-col justify-center px-8 md:px-16 ${index % 2 === 0 ? 'items-start text-left' : 'items-end text-right'
                                    }`}>
                                    <span className="text-[#D4AF37] text-xs md:text-sm tracking-[0.4em] uppercase mb-4 animate-pulse" style={{ animationDuration: '3s' }}>
                                        {collection.subtitle}
                                    </span>
                                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-6 max-w-lg leading-tight">
                                        {collection.title}
                                    </h3>
                                    <p className="text-white/80 text-sm md:text-base font-light mb-8 max-w-md hidden md:block">
                                        {collection.description}
                                    </p>
                                    <span className="inline-flex items-center gap-2 px-8 py-3 border border-white text-white uppercase tracking-[0.2em] text-sm font-light overflow-hidden relative group-hover:border-[#D4AF37]">
                                        <span className="relative z-10 group-hover:text-[#1A1A1A] transition-colors duration-500">Discover</span>
                                        <ArrowRight size={16} className="relative z-10 group-hover:text-[#1A1A1A] group-hover:translate-x-1 transition-all duration-500" />
                                        <span className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCollections;
