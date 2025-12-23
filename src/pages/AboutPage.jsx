// src/pages/AboutPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Heart, Sparkles, Users } from 'lucide-react';

const AboutPage = () => {
    const values = [
        {
            icon: Sparkles,
            title: "Craftsmanship",
            description: "Every stitch is a testament to our artisans' dedication and skill"
        },
        {
            icon: Heart,
            title: "Passion",
            description: "We pour love into every creation, making each piece unique"
        },
        {
            icon: Award,
            title: "Excellence",
            description: "Uncompromising quality in materials, design, and finish"
        },
        {
            icon: Users,
            title: "Heritage",
            description: "Preserving traditional techniques while embracing innovation"
        }
    ];

    const milestones = [
        { year: "2010", event: "Founded with a vision to revolutionize bridal couture" },
        { year: "2014", event: "Opened our flagship boutique in New Delhi" },
        { year: "2018", event: "Launched international shipping to 50+ countries" },
        { year: "2022", event: "Celebrated dressing 5000+ brides worldwide" },
        { year: "2024", event: "Introduced sustainable fabric collection" },
    ];

    return (
        <div className="min-h-screen bg-[#FDFBF7]">
            {/* Hero Section */}
            <section className="relative h-[60vh] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
                    alt="About Mili's Couture"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <span className="text-[#D4AF37] text-sm tracking-[0.4em] uppercase mb-4">
                        Our Story
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
                        About Mili's Couture
                    </h1>
                    <p className="text-white/80 text-lg max-w-2xl">
                        Where tradition meets timeless elegance
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4 block">
                                The Beginning
                            </span>
                            <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] mb-6">
                                A Journey of Elegance
                            </h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    Founded in 2010, Mili's Couture began as a small atelier with a grand vision —
                                    to create garments that tell stories, evoke emotions, and stand the test of time.
                                </p>
                                <p>
                                    Our founder, Mili Sharma, grew up watching her grandmother weave magic with
                                    needle and thread. Those childhood memories of intricate embroidery and flowing
                                    silks inspired a lifelong passion for couture.
                                </p>
                                <p>
                                    Today, we work with over 100 master artisans, each bringing generations of
                                    expertise in traditional techniques like zardozi, chikankari, and Banarasi weaving.
                                </p>
                            </div>
                            <Link
                                to="/collections"
                                className="inline-block mt-8 px-8 py-3 bg-[#8B0000] text-white uppercase tracking-[0.15em] text-sm font-light hover:bg-[#5C0A0A] transition-colors"
                            >
                                Explore Collections
                            </Link>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80"
                                alt="Our Craftsmanship"
                                className="w-full aspect-[4/5] object-cover shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#D4AF37]/20 -z-10" />
                            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-[#8B0000]/30 -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4 block">
                            What We Stand For
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A]">
                            Our Values
                        </h2>
                        <div className="h-0.5 w-16 bg-[#8B0000] mx-auto mt-6" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => {
                            const IconComponent = value.icon;
                            return (
                                <div key={index} className="text-center group p-6 hover:bg-[#FDFBF7] transition-colors rounded-lg">
                                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#8B0000]/10 flex items-center justify-center group-hover:bg-[#8B0000] transition-colors duration-300">
                                        <IconComponent className="w-8 h-8 text-[#8B0000] group-hover:text-white transition-colors" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="font-serif text-xl text-[#1A1A1A] mb-3">{value.title}</h3>
                                    <p className="text-gray-500 text-sm">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Founder Quote */}
            <section className="py-20 bg-[#1A1A1A]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <blockquote className="text-2xl md:text-3xl font-serif text-white italic leading-relaxed mb-8">
                        "Fashion is not about following trends. It's about making a statement,
                        telling your story, and feeling beautiful in your own skin."
                    </blockquote>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-px w-12 bg-[#D4AF37]" />
                        <div>
                            <p className="text-[#D4AF37] font-serif text-lg">Mili Sharma</p>
                            <p className="text-gray-400 text-sm tracking-[0.1em] mt-1">Founder & Creative Director</p>
                        </div>
                        <div className="h-px w-12 bg-[#D4AF37]" />
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-[#FDFBF7]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4 block">
                            Our Journey
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A]">
                            Milestones
                        </h2>
                        <div className="h-0.5 w-16 bg-[#8B0000] mx-auto mt-6" />
                    </div>

                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-[#8B0000]/20" />

                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                        <div className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                                            <span className="text-[#D4AF37] font-serif text-2xl">{milestone.year}</span>
                                            <p className="text-gray-600 mt-2">{milestone.event}</p>
                                        </div>
                                    </div>
                                    {/* Center Dot */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#8B0000] rounded-full border-4 border-[#FDFBF7]" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-[#5C0A0A] via-[#8B0000] to-[#5C0A0A]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
                        Ready to Experience Mili's Couture?
                    </h2>
                    <p className="text-white/80 mb-10 max-w-xl mx-auto">
                        Visit our boutique for a personalized consultation or explore our collections online.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="px-10 py-4 bg-[#D4AF37] text-[#1A1A1A] uppercase tracking-[0.15em] text-sm font-medium hover:bg-white transition-colors"
                        >
                            Book Appointment
                        </Link>
                        <Link
                            to="/products"
                            className="px-10 py-4 border-2 border-white text-white uppercase tracking-[0.15em] text-sm font-medium hover:bg-white hover:text-[#1A1A1A] transition-all"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
