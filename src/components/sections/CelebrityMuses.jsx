// src/components/sections/CelebrityMuses.jsx
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CelebrityMuses = ({ muses }) => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -400 : 400;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-20 md:py-28 bg-gradient-to-b from-[#FDFBF7] to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4 block">
                        Spotted In Mili's
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] tracking-wide">
                        Our Muses
                    </h2>
                    <div className="h-0.5 w-16 bg-[#8B0000] mx-auto mt-6" />
                    <p className="text-gray-500 mt-6 max-w-xl mx-auto">
                        Celebrating the elegant women who wear our creations with grace
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    <button
                        onClick={() => scroll('left')}
                        className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-[#1A1A1A] hover:bg-[#8B0000] hover:text-white transition-all duration-300 hidden md:flex"
                    >
                        <ChevronLeft size={24} strokeWidth={1.5} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-[#1A1A1A] hover:bg-[#8B0000] hover:text-white transition-all duration-300 hidden md:flex"
                    >
                        <ChevronRight size={24} strokeWidth={1.5} />
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth snap-x snap-mandatory"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {muses.map((muse, index) => (
                            <div
                                key={index}
                                className="group flex-shrink-0 w-[300px] md:w-[380px] snap-start"
                            >
                                <div className="relative overflow-hidden aspect-[3/4]">
                                    <img
                                        src={muse.image}
                                        alt={muse.name}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                        <h3 className="text-white font-serif text-xl mb-1">{muse.name}</h3>
                                        <p className="text-[#D4AF37] text-sm tracking-wide">{muse.outfit}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CelebrityMuses;
