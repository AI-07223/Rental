// src/components/sections/CategoryGrid.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryGrid = ({ categories }) => {
    return (
        <section className="py-20 md:py-28 bg-gradient-to-b from-white via-[#FDFBF7] to-white relative overflow-hidden">
            {/* Decorative gradient orbs */}
            <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-[#8B0000]/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4 block animate-fade-in-up">
                        Collections
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] tracking-wide animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                        Shop By Category
                    </h2>
                    <div className="h-0.5 w-16 bg-gradient-to-r from-[#8B0000] to-[#D4AF37] mx-auto mt-6 animate-fade-in-up" style={{ animationDelay: '200ms' }} />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {categories.map((cat, index) => (
                        <Link
                            key={cat.id}
                            to={`/category/${cat.id}`}
                            className={`group relative overflow-hidden ${index === 0 || index === 5 ? 'md:row-span-2 aspect-[3/4]' : 'aspect-square'
                                } animate-fade-in-up`}
                            style={{ animationDelay: `${(index + 1) * 100}ms` }}
                        >
                            <img
                                src={cat.image}
                                alt={cat.name}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                            {/* Shimmer effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 md:pb-12">
                                <h3 className="text-white text-xl md:text-2xl font-serif tracking-[0.15em] uppercase mb-3 transform group-hover:-translate-y-2 transition-transform duration-500">
                                    {cat.name}
                                </h3>
                                <span className="text-white/80 text-xs md:text-sm tracking-[0.2em] uppercase border-b-2 border-transparent group-hover:border-[#D4AF37] pb-1 transition-all duration-300 transform group-hover:-translate-y-2">
                                    Explore
                                </span>
                            </div>

                            {/* Corner accent */}
                            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/0 group-hover:border-[#D4AF37] transition-colors duration-500" />
                            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/0 group-hover:border-[#D4AF37] transition-colors duration-500" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryGrid;
