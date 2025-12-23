// src/components/sections/DesignerQuote.jsx
import React from 'react';
import { Quote } from 'lucide-react';

const DesignerQuote = () => {
    return (
        <section className="py-24 md:py-32 bg-gradient-to-br from-[#1A1A1A] via-[#2A1A1A] to-[#1A1A1A] relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 border border-[#D4AF37] rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute top-1/2 right-0 w-64 h-64 border border-[#D4AF37] rounded-full translate-x-1/2 animate-pulse" style={{ animationDuration: '6s' }} />
                <div className="absolute bottom-0 left-1/3 w-80 h-80 border border-[#D4AF37] rounded-full translate-y-1/2 animate-pulse" style={{ animationDuration: '5s' }} />
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '3s' }} />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#8B0000]/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <Quote className="w-12 h-12 text-[#D4AF37] mx-auto mb-8 rotate-180 animate-float" strokeWidth={1} />

                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif text-white leading-relaxed mb-10 italic animate-fade-in-up">
                    "Every stitch we create is a celebration of femininity, tradition, and the dreams of the women we dress.
                    At Mili's Couture, we don't just make clothes — we craft memories."
                </blockquote>

                <div className="flex items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
                    <div>
                        <p className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent font-serif text-lg">Mili Sharma</p>
                        <p className="text-gray-400 text-sm tracking-[0.2em] uppercase mt-1">Founder & Creative Director</p>
                    </div>
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
                </div>
            </div>
        </section>
    );
};

export default DesignerQuote;
