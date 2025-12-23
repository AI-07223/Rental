// src/components/sections/NewArrivalsCarousel.jsx
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import ProductCard from '../ProductCard';

const NewArrivalsCarousel = ({ products }) => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -340 : 340;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-20 md:py-28 bg-gradient-to-b from-[#FDFBF7] via-[#FFF8F0] to-[#FDFBF7] relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                    <div>
                        <span className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4 block animate-fade-in-left">
                            Just In
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] tracking-wide animate-fade-in-left" style={{ animationDelay: '100ms' }}>
                            New Arrivals
                        </h2>
                        <div className="h-0.5 w-16 bg-gradient-to-r from-[#8B0000] to-[#D4AF37] mt-4 animate-fade-in-left" style={{ animationDelay: '200ms' }} />
                    </div>
                    <Link
                        to="/category/lehenga"
                        className="group flex items-center text-sm font-medium text-[#1A1A1A] hover:text-[#8B0000] uppercase tracking-[0.15em] transition-colors animate-fade-in-right"
                    >
                        View All Collection
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-full flex items-center justify-center text-[#1A1A1A] hover:from-[#8B0000] hover:to-[#5C0A0A] hover:text-white transition-all duration-300 hidden md:flex hover:scale-110 hover:shadow-xl"
                    >
                        <ChevronLeft size={24} strokeWidth={1.5} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-full flex items-center justify-center text-[#1A1A1A] hover:from-[#8B0000] hover:to-[#5C0A0A] hover:text-white transition-all duration-300 hidden md:flex hover:scale-110 hover:shadow-xl"
                    >
                        <ChevronRight size={24} strokeWidth={1.5} />
                    </button>

                    {/* Scrollable Products */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth snap-x snap-mandatory"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {products.map((product, index) => (
                            <div
                                key={product.id}
                                className="flex-shrink-0 w-[280px] md:w-[320px] snap-start animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewArrivalsCarousel;
