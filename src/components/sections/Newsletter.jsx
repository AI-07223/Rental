// src/components/sections/Newsletter.jsx
import React, { useState } from 'react';
import { Mail, ArrowRight, Sparkles } from 'lucide-react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            setEmail('');
        }
    };

    return (
        <section className="py-20 md:py-24 bg-gradient-to-br from-[#5C0A0A] via-[#8B0000] to-[#A52A2A] relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Pattern overlay using CSS */}
                <div
                    className="absolute top-0 left-0 w-full h-full opacity-10"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundRepeat: 'repeat'
                    }}
                />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '3s' }} />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6 animate-bounce" style={{ animationDuration: '3s' }}>
                    <Mail className="w-8 h-8 text-[#D4AF37]" strokeWidth={1.5} />
                </div>

                <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                    Enter The World of Mili's Couture
                </h2>
                <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                    Be the first to know about new collections, exclusive offers, and styling inspiration.
                </p>

                {!submitted ? (
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                        <div className="relative group">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full px-6 py-4 pr-14 bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37] focus:bg-white/20 transition-all duration-300 text-center md:text-left"
                                required
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] flex items-center justify-center hover:scale-110 transition-transform duration-300"
                            >
                                <ArrowRight className="w-5 h-5 text-[#1A1A1A]" />
                            </button>
                            {/* Glow effect on focus */}
                            <div className="absolute inset-0 -z-10 bg-[#D4AF37]/0 group-focus-within:bg-[#D4AF37]/20 blur-xl transition-all duration-500 rounded-lg" />
                        </div>
                    </form>
                ) : (
                    <div className="bg-white/10 backdrop-blur-sm border border-[#D4AF37] px-6 py-6 max-w-md mx-auto">
                        <Sparkles className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
                        <p className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent font-serif text-xl">
                            Welcome to the family!
                        </p>
                        <p className="text-white/80 text-sm mt-2">
                            You'll receive our first newsletter soon.
                        </p>
                    </div>
                )}

                <p className="text-white/40 text-xs mt-6 tracking-wide">
                    We respect your privacy. Unsubscribe anytime.
                </p>
            </div>
        </section>
    );
};

export default Newsletter;
