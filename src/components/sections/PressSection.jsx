// src/components/sections/PressSection.jsx
import React from 'react';

const PressSection = () => {
    const pressLogos = [
        { name: "Vogue", text: "VOGUE" },
        { name: "Elle", text: "ELLE" },
        { name: "Harper's Bazaar", text: "HARPER'S BAZAAR" },
        { name: "Femina", text: "FEMINA" },
        { name: "Grazia", text: "GRAZIA" },
        { name: "Cosmopolitan", text: "COSMOPOLITAN" },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <span className="text-gray-400 text-sm tracking-[0.3em] uppercase">
                        As Featured In
                    </span>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {pressLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="text-xl md:text-2xl font-serif text-gray-300 hover:text-[#8B0000] transition-colors duration-300 cursor-default tracking-[0.1em]"
                        >
                            {logo.text}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PressSection;
