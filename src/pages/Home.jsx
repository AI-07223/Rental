// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config';
import ProductCard from '../components/ProductCard';
import { ArrowRight, Star } from 'lucide-react';

const Home = () => {
  const { hero, products, categories, theme, sections, banners, rentalCurations, blogs, seoContent } = siteConfig;

  // Filter collections
  const signatureCollection = products.filter(p => p.category === 'bridal').slice(0, 4);
  const newArrivals = products.filter(p => p.category === 'new-arrivals').slice(0, 4);
  const manOfDistinctionCollection = products.filter(p => p.category === 'men').slice(0, 4);

  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Simple fade-in/out or carousel slider could go here.
            For simplicity in this version, we map over images but only show active or just animate opacity.
            CSS animation is cleaner for a simple loop. */}
        {hero.images && hero.images.length > 0 ? (
          hero.images.map((img, index) => (
             <img
               key={index}
               src={img}
               alt={`Hero ${index + 1}`}
               className="absolute inset-0 w-full h-full object-cover animate-fade"
               style={{ animationDelay: `${index * 5}s`, opacity: 0 }}
             />
          ))
        ) : (
          <img
             src={hero.image}
             alt="Hero"
             className="absolute inset-0 w-full h-full object-cover"
           />
        )}
        <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center px-4 pt-20 z-10">
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
           <img src={banners.forHer} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75 group-hover:brightness-90" alt="For Her" />
           <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 border-r border-white/20">
              <h2 className="text-4xl font-serif mb-4">For Her</h2>
              <Link to="/category/bridal" className="text-sm uppercase tracking-[0.2em] border-b border-white pb-1 hover:text-gray-200">Explore Now</Link>
           </div>
        </div>
        <div className="relative group overflow-hidden h-full">
           <img src={banners.forHim} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75 group-hover:brightness-90" alt="For Him" />
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

       {/* Man of Distinction Banner & Products */}
       <section className="pb-20 bg-white text-center">
         <h2 className="font-serif text-3xl md:text-4xl mb-8">Rent Out - For the Man of Distinction</h2>
         <div className="max-w-[1200px] mx-auto px-4 mb-12">
            <img src={banners.manOfDistinction} alt="Groom Banner" className="w-full h-auto" />
         </div>
         <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
               {manOfDistinctionCollection.map(product => (
                 <ProductCard key={product.id} product={product} />
               ))}
             </div>
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

      {/* Rental Curations */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {rentalCurations.map((item, idx) => (
                <div key={idx} className="group cursor-pointer">
                    <div className="overflow-hidden mb-6 h-[500px]">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                    </div>
                    <h3 className="font-serif text-2xl mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm mb-4 leading-relaxed">{item.description}</p>
                    <Link to={item.link} className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1">Explore Collection</Link>
                </div>
            ))}
        </div>
      </section>

      {/* Blogs */}
      <section className="py-20 bg-[#f9f9f9]">
          <div className="max-w-[1200px] mx-auto px-4">
              <div className="flex justify-between items-end mb-12">
                  <h2 className="font-serif text-4xl">From the Journal</h2>
                  <Link to="/blog" className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">Read All Stories <ArrowRight size={16}/></Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {blogs.map((blog, idx) => (
                      <div key={idx} className="group bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                          <div className="overflow-hidden mb-4 h-64">
                              <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                          </div>
                          <h3 className="font-serif text-xl mb-3 leading-tight group-hover:text-[#bfa480] transition-colors">{blog.title}</h3>
                          <p className="text-gray-500 text-sm mb-4 line-clamp-3 leading-relaxed">{blog.excerpt}</p>
                          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Read More</span>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 text-center bg-white border-t border-gray-100">
         <div className="max-w-3xl mx-auto px-4">
            <h2 className="font-serif text-3xl mb-12">What Our Customers Say</h2>
            <div className="space-y-12">
               {sections.testimonials.map((testimonial, idx) => (
                 <div key={idx} className="space-y-6">
                    <img src={testimonial.image} alt="Customer" className="w-20 h-20 rounded-full mx-auto object-cover" />
                    <p className="font-serif text-xl italic text-gray-600 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-widest">{testimonial.author}</h4>
                        <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">{testimonial.role}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* SEO Content */}
      <section className="py-20 bg-[#f5f5f5] text-center border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-6">
              <h2 className="font-serif text-2xl md:text-3xl mb-6 text-gray-800">{seoContent.title}</h2>
              <div className="space-y-6 text-gray-600 text-sm leading-relaxed">
                  {seoContent.content.map((para, idx) => (
                      <p key={idx}>{para}</p>
                  ))}
              </div>

              <div className="mt-12 grid gap-10 text-left">
                  {seoContent.sections.map((section, idx) => (
                      <div key={idx}>
                          <h3 className="font-serif text-xl mb-3 text-gray-800">{section.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{section.content}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

    </div>
  );
};

export default Home;
