// src/pages/CategoryPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { siteConfig } from '../config';
import ProductCard from '../components/ProductCard';

const CategoryPage = () => {
  const { id } = useParams();
  const { products, categories } = siteConfig;

  // Find category details
  const categoryInfo = categories.find(c => c.id === id);

  // Filter products
  const categoryProducts = products.filter(p => p.category === id);

  if (!categoryInfo) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-serif text-gray-800 mb-4">Category not found</h2>
        <Link to="/" className="text-pink-500 hover:text-pink-600 underline">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Category Header */}
      <div className="bg-gray-100 py-16 text-center">
        <h1 className="text-4xl font-serif text-gray-900 tracking-wider uppercase mb-4">
          {categoryInfo.name}
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto px-4">
          Explore our exclusive collection of {categoryInfo.name.toLowerCase()}.
        </p>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs uppercase tracking-widest text-gray-400">
        <Link to="/" className="hover:text-pink-500">Home</Link> / <span className="text-gray-800">{categoryInfo.name}</span>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
         {categoryProducts.length > 0 ? (
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
             {categoryProducts.map(product => (
               <ProductCard key={product.id} product={product} />
             ))}
           </div>
         ) : (
           <div className="text-center py-20 bg-gray-50 rounded-lg mt-8">
             <p className="text-gray-500 font-serif text-lg">No products found in this category yet.</p>
             <p className="text-gray-400 text-sm mt-2">Check back soon for new arrivals!</p>
           </div>
         )}
      </div>
    </div>
  );
};

export default CategoryPage;
