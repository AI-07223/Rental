// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config';
import ProductCard from '../components/ProductCard';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const { hero, products, categories } = siteConfig;

  // Get New Arrivals (just taking first 4 products for now)
  const newArrivals = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full bg-gray-200 overflow-hidden">
        <img
          src={hero.image}
          alt="Hero"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center px-4">
           <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 tracking-wider drop-shadow-lg">
             {hero.title}
           </h1>
           <p className="text-white text-lg md:text-xl font-light tracking-wide mb-10 max-w-2xl drop-shadow-md">
             {hero.subtitle}
           </p>
           <Link
             to="/category/lehenga"
             className="px-10 py-4 bg-white text-gray-900 uppercase tracking-[0.2em] text-sm font-medium hover:bg-pink-100 transition-colors"
           >
             {hero.buttonText}
           </Link>
        </div>
      </div>

      {/* Categories Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-gray-900 tracking-wide mb-3">Shop By Category</h2>
          <div className="h-1 w-20 bg-pink-300 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {categories.map((cat) => (
            <Link key={cat.id} to={`/category/${cat.id}`} className="group block relative overflow-hidden aspect-square">
               <img
                 src={cat.image}
                 alt={cat.name}
                 referrerPolicy="no-referrer"
                 className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
               />
               <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                 <span className="text-white text-lg md:text-2xl font-serif tracking-widest uppercase border-b-2 border-transparent group-hover:border-white pb-1 transition-all">
                   {cat.name}
                 </span>
               </div>
            </Link>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between items-end mb-12">
             <div>
               <h2 className="text-3xl font-serif text-gray-900 tracking-wide mb-2">New Arrivals</h2>
               <div className="h-1 w-20 bg-pink-300"></div>
             </div>
             <Link to="/category/lehenga" className="hidden md:flex items-center text-sm font-medium text-gray-500 hover:text-pink-500 uppercase tracking-widest transition-colors">
               View All <ArrowRight size={16} className="ml-2" />
             </Link>
           </div>

           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
             {newArrivals.map(product => (
               <ProductCard key={product.id} product={product} />
             ))}
           </div>

           <div className="mt-10 text-center md:hidden">
              <Link to="/category/lehenga" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-pink-500 uppercase tracking-widest transition-colors">
                 View All <ArrowRight size={16} className="ml-2" />
              </Link>
           </div>
        </div>
      </section>

      {/* Testimonial / Story Placeholder */}
      <section className="py-20 bg-pink-50 text-center px-4">
         <div className="max-w-3xl mx-auto">
           <h2 className="text-2xl font-serif italic text-gray-800 mb-8">
             "Fashion is not just about clothes, it is about a look. That’s what we deliver."
           </h2>
           <p className="text-gray-500 text-sm uppercase tracking-widest">— Mili's Couture</p>
         </div>
      </section>
    </div>
  );
};

export default Home;
