// src/pages/CategoryPage.jsx
import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { siteConfig } from '../config';
import ProductCard from '../components/ProductCard';
import { ChevronRight, Grid, List, SlidersHorizontal } from 'lucide-react';

const CategoryPage = () => {
  const { id } = useParams();
  const { products, categories } = siteConfig;
  const [sortBy, setSortBy] = useState('default');
  const [viewMode, setViewMode] = useState('grid');

  // Find category details
  const categoryInfo = categories.find(c => c.id === id);

  // Filter and sort products
  const categoryProducts = useMemo(() => {
    let result = products.filter(p => p.category === id);

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
          const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
          return priceA - priceB;
        });
        break;
      case 'price-high':
        result.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
          const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
          return priceB - priceA;
        });
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return result;
  }, [products, id, sortBy]);

  // Category descriptions
  const categoryDescriptions = {
    lehenga: "Discover our exquisite collection of bridal and festive lehengas, handcrafted with intricate embroidery and the finest fabrics.",
    saree: "Timeless elegance meets contemporary style in our curated collection of silk sarees, Banarasi weaves, and designer drapes.",
    gown: "From cocktail evenings to red carpet events, find the perfect gown that makes you the center of attention.",
    tuxedo: "Impeccably tailored tuxedos for the modern gentleman, designed for unforgettable occasions.",
    sherwani: "Regal sherwanis that blend traditional craftsmanship with contemporary silhouettes for the discerning groom.",
    jewellery: "Complete your ensemble with our stunning collection of traditional and contemporary jewellery pieces."
  };

  // Category hero images
  const categoryImages = {
    lehenga: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1920&q=80",
    saree: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=1920&q=80",
    gown: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
    tuxedo: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1920&q=80",
    sherwani: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1920&q=80",
    jewellery: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80"
  };

  if (!categoryInfo) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#FDFBF7]">
        <h2 className="text-2xl font-serif text-gray-800 mb-4">Category not found</h2>
        <Link to="/products" className="text-[#8B0000] hover:underline">
          Browse all products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      {/* Category Hero */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src={categoryImages[id] || categoryImages.lehenga}
          alt={categoryInfo.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-[#D4AF37] text-sm tracking-[0.4em] uppercase mb-4">
            Collection
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 tracking-wider uppercase">
            {categoryInfo.name}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            {categoryDescriptions[id] || `Explore our exclusive collection of ${categoryInfo.name.toLowerCase()}.`}
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400">
          <Link to="/" className="hover:text-[#8B0000]">Home</Link>
          <ChevronRight size={12} />
          <Link to="/collections" className="hover:text-[#8B0000]">Collections</Link>
          <ChevronRight size={12} />
          <span className="text-gray-800">{categoryInfo.name}</span>
        </div>
      </div>

      {/* Toolbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-200">
          {/* Results Count */}
          <p className="text-sm text-gray-500">
            <span className="font-medium text-[#1A1A1A]">{categoryProducts.length}</span> Products
          </p>

          {/* Sort & View */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={16} className="text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-200 text-sm text-gray-700 focus:border-[#8B0000] focus:ring-0 outline-none bg-transparent"
              >
                <option value="default">Featured</option>
                <option value="name">Name A-Z</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            <div className="hidden md:flex items-center gap-1 border border-gray-200 p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-[#8B0000] text-white' : 'text-gray-500 hover:text-[#8B0000]'} transition-colors`}
              >
                <Grid size={16} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-[#8B0000] text-white' : 'text-gray-500 hover:text-[#8B0000]'} transition-colors`}
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {categoryProducts.length > 0 ? (
          <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1'}`}>
            {categoryProducts.map(product => (
              <ProductCard key={product.id} product={product} viewMode={viewMode} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-lg">
            <p className="text-gray-500 font-serif text-lg mb-4">
              No products found in this category yet.
            </p>
            <p className="text-gray-400 text-sm mb-6">
              Check back soon for new arrivals!
            </p>
            <Link
              to="/products"
              className="inline-block px-8 py-3 bg-[#8B0000] text-white uppercase tracking-[0.15em] text-sm hover:bg-[#5C0A0A] transition-colors"
            >
              Browse All Products
            </Link>
          </div>
        )}
      </div>

      {/* Other Categories */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif text-[#1A1A1A] text-center mb-10">
            Explore Other Collections
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.filter(c => c.id !== id).map(cat => (
              <Link
                key={cat.id}
                to={`/category/${cat.id}`}
                className="group text-center"
              >
                <div className="aspect-square overflow-hidden mb-3 bg-gray-100">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <span className="text-sm uppercase tracking-wide text-gray-700 group-hover:text-[#8B0000] transition-colors">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
