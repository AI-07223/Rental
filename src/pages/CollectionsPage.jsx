// src/pages/CollectionsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CollectionsPage = () => {
    const collections = [
        {
            id: "bridal",
            title: "The Bridal Edit",
            subtitle: "Say 'I Do' in Style",
            description: "Exquisite bridal lehengas handcrafted with love, blending traditional embroidery with contemporary silhouettes.",
            image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1200&q=80",
            link: "/category/lehenga",
            featured: true
        },
        {
            id: "festive",
            title: "Festive Glamour",
            subtitle: "Celebrate in Elegance",
            description: "Stunning pieces for every celebration - from Diwali to sangeet nights.",
            image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=1200&q=80",
            link: "/category/saree"
        },
        {
            id: "groom",
            title: "Groom's Collection",
            subtitle: "The Modern Maharaja",
            description: "Regal sherwanis and contemporary tuxedos for the discerning groom.",
            image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1200&q=80",
            link: "/category/sherwani"
        },
        {
            id: "evening",
            title: "Evening Wear",
            subtitle: "Glamour After Dark",
            description: "Sophisticated gowns and cocktail attire for unforgettable evenings.",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
            link: "/category/gown"
        },
        {
            id: "heritage",
            title: "Heritage Weaves",
            subtitle: "Handwoven Legacy",
            description: "Authentic Banarasi and Kanjeevaram sarees celebrating India's weaving traditions.",
            image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=1200&q=80",
            link: "/category/saree"
        },
        {
            id: "jewellery",
            title: "Adornments",
            subtitle: "The Finishing Touch",
            description: "Exquisite jewellery to complement your ensemble perfectly.",
            image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
            link: "/category/jewellery"
        }
    ];

    const featuredCollection = collections.find(c => c.featured);
    const regularCollections = collections.filter(c => !c.featured);

    return (
        <div className="min-h-screen bg-[#FDFBF7]">
            {/* Hero Section */}
            <section className="relative h-[50vh] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
                    alt="Collections"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <span className="text-[#D4AF37] text-sm tracking-[0.4em] uppercase mb-4">
                        Curated For You
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
                        Our Collections
                    </h1>
                    <p className="text-white/80 text-lg max-w-2xl">
                        Discover our carefully curated collections for every occasion
                    </p>
                </div>
            </section>

            {/* Featured Collection */}
            {featuredCollection && (
                <section className="py-20 md:py-28">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Link to={featuredCollection.link} className="group block">
                            <div className="relative overflow-hidden">
                                <div className="aspect-[21/9] overflow-hidden">
                                    <img
                                        src={featuredCollection.image}
                                        alt={featuredCollection.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center">
                                    <div className="px-8 md:px-16 max-w-2xl">
                                        <span className="text-[#D4AF37] text-xs md:text-sm tracking-[0.4em] uppercase mb-4 block">
                                            Featured Collection
                                        </span>
                                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
                                            {featuredCollection.title}
                                        </h2>
                                        <p className="text-white/80 text-sm md:text-base mb-6 hidden md:block">
                                            {featuredCollection.description}
                                        </p>
                                        <span className="inline-flex items-center gap-2 text-white uppercase tracking-[0.15em] text-sm border-b border-white pb-1 group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-colors">
                                            Explore Collection <ArrowRight size={16} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>
            )}

            {/* Collection Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4 block">
                            Browse
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A]">
                            All Collections
                        </h2>
                        <div className="h-0.5 w-16 bg-[#8B0000] mx-auto mt-6" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {regularCollections.map((collection) => (
                            <Link
                                key={collection.id}
                                to={collection.link}
                                className="group block"
                            >
                                <div className="relative overflow-hidden aspect-[4/5]">
                                    <img
                                        src={collection.image}
                                        alt={collection.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                                        <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-2">
                                            {collection.subtitle}
                                        </span>
                                        <h3 className="text-2xl font-serif text-white mb-3">
                                            {collection.title}
                                        </h3>
                                        <p className="text-white/70 text-sm mb-4 line-clamp-2">
                                            {collection.description}
                                        </p>
                                        <span className="inline-flex items-center gap-2 text-white text-sm uppercase tracking-[0.1em] group-hover:text-[#D4AF37] transition-colors">
                                            Shop Now <ArrowRight size={14} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-20 bg-[#1A1A1A]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
                        Can't Find What You're Looking For?
                    </h2>
                    <p className="text-white/80 mb-10 max-w-xl mx-auto">
                        Our bespoke service allows you to create a one-of-a-kind piece tailored to your vision.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block px-10 py-4 bg-[#D4AF37] text-[#1A1A1A] uppercase tracking-[0.15em] text-sm font-medium hover:bg-white transition-colors"
                    >
                        Enquire About Custom Design
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default CollectionsPage;
