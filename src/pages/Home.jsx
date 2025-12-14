// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config';
import ProductCard from '../components/ProductCard';
import { ArrowRight, Star } from 'lucide-react';

const Home = () => {
  const { hero, products, categories, theme, sections, banners } = siteConfig;

  // Filter collections
  const signatureCollection = products.filter(p => p.category === 'bridal').slice(0, 4);
  const newArrivals = products.filter(p => p.category === 'new-arrivals').slice(0, 4);

  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <img
          src={hero.image}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center px-4 pt-20">
           <h2 className="text-white text-lg md:text-xl tracking-[0.3em] uppercase mb-4 drop-shadow-md">
             {hero.subtitle}
           </h2>
           <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-10 tracking-wide drop-shadow-xl">
             {hero.title}
           </h1>
           <Link
             to="/category/bridal"
             className="px-12 py-4 bg-white/90 hover:bg-white text-black uppercase tracking-[0.2em] text-xs font-bold transition-all duration-300"
           >
             {hero.buttonText}
           </Link>
        </div>
      </div>

      {/* Signature Collection */}
      <section className="py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="font-serif text-3xl md:text-4xl italic mb-6">{sections.signature.title}</h3>
        <p className="max-w-2xl mx-auto text-gray-500 mb-16 font-serif text-lg leading-relaxed">
          {sections.signature.subtitle}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {signatureCollection.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* For Him & Her Banner */}
      <section className="grid md:grid-cols-2 h-[600px] md:h-[500px]">
        <div className="relative group overflow-hidden h-full">
           <img src="https://dresszilla.in/wp-content/uploads/2025/06/IMG_6026-scaled-300x400.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75 group-hover:brightness-90" alt="For Her" />
           <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 border-r border-white/20">
              <h2 className="text-4xl font-serif mb-4">For Her</h2>
              <Link to="/category/bridal" className="text-sm uppercase tracking-[0.2em] border-b border-white pb-1 hover:text-gray-200">Explore Now</Link>
           </div>
        </div>
        <div className="relative group overflow-hidden h-full">
           <img src="https://dresszilla.in/wp-content/uploads/2025/06/IMG_5396-1-300x375.webp" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75 group-hover:brightness-90" alt="For Him" />
           <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
              <h2 className="text-4xl font-serif mb-4">For Him</h2>
              <Link to="/category/tuxedo" className="text-sm uppercase tracking-[0.2em] border-b border-white pb-1 hover:text-gray-200">Explore Now</Link>
           </div>
        </div>
      </section>

      {/* Rental Bridal Couture Banner */}
      <section className="py-20 text-center bg-[#fafafa]">
         <h2 className="font-serif text-4xl md:text-5xl mb-6">Rental Bridal Couture</h2>
         <p className="text-gray-500 mb-10 tracking-wider uppercase text-sm">Rent your dream lehenga or gown for weddings, parties, pre-wedding shoots & more.</p>
         <div className="max-w-[1200px] mx-auto px-4">
            <img src={banners.rentalBridal} alt="Bridal Banner" className="w-full h-auto shadow-sm" />
         </div>
      </section>

      {/* New Arrivals */}
      <section className="py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="font-serif text-4xl mb-4">New Arrivals</h3>
        <p className="text-gray-500 mb-16 tracking-widest uppercase text-xs">Wear designer outfits worth lakhs on a fraction of the price</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {newArrivals.map(product => (
             <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

       {/* Man of Distinction Banner */}
       <section className="pb-20 bg-white text-center">
         <h2 className="font-serif text-3xl md:text-4xl mb-8">Rent Out - For the Man of Distinction</h2>
         <div className="max-w-[1200px] mx-auto px-4">
            <img src={banners.manOfDistinction} alt="Groom Banner" className="w-full h-auto" />
         </div>
      </section>

      {/* Our Story */}
      <section className="bg-[#fcfcfc] py-24">
        <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
           <div>
             <span className="text-6xl font-serif text-gray-300 block mb-4">“</span>
             <h3 className="font-serif text-2xl leading-relaxed mb-6">
               {sections.story.text[0]}
             </h3>
             <div className="text-gray-500 space-y-4 text-sm leading-7 text-justify">
               {sections.story.text.slice(1).map((p, i) => <p key={i}>{p}</p>)}
             </div>
             <p className="mt-8 font-serif text-lg italic">– {sections.story.founder}</p>
           </div>
           <div className="grid grid-cols-2 gap-4">
              <img src={sections.story.images[0]} className="w-full h-[400px] object-cover -mt-10" alt="Story 1" />
              <img src={sections.story.images[1]} className="w-full h-[400px] object-cover mt-10" alt="Story 2" />
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 text-center bg-white border-t border-gray-100">
         <div className="max-w-3xl mx-auto px-4">
            <h2 className="font-serif text-3xl mb-12">What Our Customers Say</h2>
            <div className="space-y-6">
               <img src="https://dresszilla.in/wp-content/uploads/2025/06/14163-200-150x150.png" alt="Customer" className="w-20 h-20 rounded-full mx-auto object-cover" />
               <p className="font-serif text-xl italic text-gray-600 leading-relaxed">
                 "From the moment I stepped into Dresszilla, I knew I wasn’t just renting a lehenga — I was choosing an heirloom. The craftsmanship, the attention to detail, the way the team listened to my story — everything was flawless."
               </p>
               <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest">Namrita S.</h4>
                  <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">My Wedding Day</p>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Home;
