// src/components/sections/ValuePropositions.jsx
import React from 'react';
import { Truck, Shield, CreditCard, Package } from 'lucide-react';

const ValuePropositions = () => {
    const propositions = [
        {
            icon: Truck,
            title: "Worldwide Shipping",
            description: "Free shipping on orders above ₹15,000"
        },
        {
            icon: Shield,
            title: "Authenticity Guaranteed",
            description: "100% genuine handcrafted pieces"
        },
        {
            icon: CreditCard,
            title: "Secure Payments",
            description: "Multiple payment options available"
        },
        {
            icon: Package,
            title: "Easy Returns",
            description: "15-day hassle-free returns"
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-r from-[#FDFBF7] via-white to-[#FDFBF7] border-y border-[#D4AF37]/10 relative overflow-hidden">
            {/* Subtle decorative line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                    {propositions.map((prop, index) => {
                        const IconComponent = prop.icon;
                        return (
                            <div
                                key={index}
                                className="text-center group cursor-default animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#8B0000]/10 to-[#5C0A0A]/5 flex items-center justify-center group-hover:from-[#8B0000] group-hover:to-[#5C0A0A] transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#8B0000]/20">
                                    <IconComponent
                                        className="w-7 h-7 text-[#8B0000] group-hover:text-white transition-colors duration-500"
                                        strokeWidth={1.5}
                                    />
                                </div>
                                <h3 className="font-serif text-[#1A1A1A] text-lg mb-2 group-hover:text-[#8B0000] transition-colors duration-300">{prop.title}</h3>
                                <p className="text-gray-500 text-sm">{prop.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ValuePropositions;
