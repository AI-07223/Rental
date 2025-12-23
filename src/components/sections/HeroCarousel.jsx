// src/components/sections/HeroCarousel.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const HeroCarousel = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const goToSlide = (index) => setCurrentSlide(index);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

    const scrollToContent = () => {
        window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' });
    };

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="absolute inset-0 w-full h-full object-cover scale-105"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                        <span className="text-[#D4AF37] text-sm md:text-base tracking-[0.4em] uppercase mb-4 font-light animate-fade-in">
                            {slide.subtitle}
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 tracking-wide leading-tight max-w-4xl">
                            {slide.title}
                        </h1>
                        <p className="text-white/80 text-base md:text-lg font-light mb-10 max-w-xl tracking-wide">
                            {slide.description}
                        </p>
                        <Link
                            to={slide.link}
                            className="group relative px-10 py-4 bg-transparent border border-white text-white uppercase tracking-[0.25em] text-sm font-light overflow-hidden transition-all duration-500 hover:border-[#D4AF37]"
                        >
                            <span className="relative z-10 group-hover:text-[#1A1A1A] transition-colors duration-500">
                                {slide.buttonText}
                            </span>
                            <span className="absolute inset-0 bg-[#D4AF37] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </Link>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 text-white/60 hover:text-white transition-colors"
            >
                <ChevronLeft size={32} strokeWidth={1} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 text-white/60 hover:text-white transition-colors"
            >
                <ChevronRight size={32} strokeWidth={1} />
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide
                                ? 'bg-[#D4AF37] w-8'
                                : 'bg-white/50 hover:bg-white/80'
                            }`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <button
                onClick={scrollToContent}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/60 hover:text-white animate-bounce transition-colors"
            >
                <ChevronDown size={28} strokeWidth={1} />
            </button>
        </div>
    );
};

export default HeroCarousel;
