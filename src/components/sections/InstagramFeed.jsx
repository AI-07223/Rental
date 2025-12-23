// src/components/sections/InstagramFeed.jsx
import React from 'react';
import { Instagram } from 'lucide-react';

const InstagramFeed = () => {
    const posts = [
        { id: 1, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80" },
        { id: 2, image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&q=80" },
        { id: 3, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
        { id: 4, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80" },
        { id: 5, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80" },
        { id: 6, image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&q=80" },
    ];

    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4 block">
                        Follow Along
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] tracking-wide">
                        @miliscouture
                    </h2>
                    <div className="h-0.5 w-16 bg-[#8B0000] mx-auto mt-6" />
                </div>

                {/* Instagram Grid */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
                    {posts.map((post) => (
                        <a
                            key={post.id}
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative aspect-square overflow-hidden"
                        >
                            <img
                                src={post.image}
                                alt="Instagram Post"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-[#8B0000]/0 group-hover:bg-[#8B0000]/60 transition-colors duration-300 flex items-center justify-center">
                                <Instagram
                                    className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:scale-100"
                                />
                            </div>
                        </a>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 border border-[#1A1A1A] text-[#1A1A1A] uppercase tracking-[0.15em] text-sm font-medium hover:bg-[#1A1A1A] hover:text-white transition-all duration-300"
                    >
                        <Instagram size={18} />
                        Follow Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed;
