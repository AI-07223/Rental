// src/pages/AllProductsPage.jsx
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config';
import ProductCard from '../components/ProductCard';
import { Filter, Grid, List, X } from 'lucide-react';

const AllProductsPage = () => {
    const { products, categories } = siteConfig;
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('default');
    const [viewMode, setViewMode] = useState('grid');
    const [showFilters, setShowFilters] = useState(false);

    const filteredProducts = useMemo(() => {
        let result = [...products];

        // Filter by category
        if (selectedCategory !== 'all') {
            result = result.filter(p => p.category === selectedCategory);
        }

        // Sort
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
    }, [products, selectedCategory, sortBy]);

    return (
        <div className="min-h-screen bg-[#FDFBF7]">
            {/* Hero Section */}
            <section className="bg-[#1A1A1A] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-[#D4AF37] text-sm tracking-[0.4em] uppercase mb-4 block">
                        Discover
                    </span>
                    <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
                        All Products
                    </h1>
                    <p className="text-white/70 max-w-xl mx-auto">
                        Explore our entire collection of handcrafted couture pieces
                    </p>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs uppercase tracking-widest text-gray-400">
                <Link to="/" className="hover:text-[#8B0000]">Home</Link> / <span className="text-gray-800">All Products</span>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar Filters - Desktop */}
                    <aside className="hidden lg:block w-64 flex-shrink-0">
                        <div className="sticky top-24 space-y-8">
                            {/* Categories */}
                            <div>
                                <h3 className="font-serif text-lg text-[#1A1A1A] mb-4">Categories</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <button
                                            onClick={() => setSelectedCategory('all')}
                                            className={`text-sm ${selectedCategory === 'all' ? 'text-[#8B0000] font-medium' : 'text-gray-600 hover:text-[#8B0000]'} transition-colors`}
                                        >
                                            All Products ({products.length})
                                        </button>
                                    </li>
                                    {categories.map(cat => {
                                        const count = products.filter(p => p.category === cat.id).length;
                                        return (
                                            <li key={cat.id}>
                                                <button
                                                    onClick={() => setSelectedCategory(cat.id)}
                                                    className={`text-sm ${selectedCategory === cat.id ? 'text-[#8B0000] font-medium' : 'text-gray-600 hover:text-[#8B0000]'} transition-colors`}
                                                >
                                                    {cat.name} ({count})
                                                </button>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            {/* Price Range - Placeholder */}
                            <div>
                                <h3 className="font-serif text-lg text-[#1A1A1A] mb-4">Price Range</h3>
                                <div className="text-sm text-gray-500">
                                    <p>₹3,500 - ₹45,000</p>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1">
                        {/* Toolbar */}
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-gray-200">
                            {/* Mobile Filter Button */}
                            <button
                                onClick={() => setShowFilters(true)}
                                className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-200 text-sm text-gray-700 hover:border-[#8B0000] hover:text-[#8B0000] transition-colors"
                            >
                                <Filter size={16} />
                                Filters
                            </button>

                            {/* Results Count */}
                            <p className="text-sm text-gray-500">
                                Showing <span className="font-medium text-[#1A1A1A]">{filteredProducts.length}</span> products
                            </p>

                            {/* Sort & View */}
                            <div className="flex items-center gap-4">
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="px-4 py-2 border border-gray-200 text-sm text-gray-700 focus:border-[#8B0000] focus:ring-0 outline-none bg-white"
                                >
                                    <option value="default">Sort By</option>
                                    <option value="name">Name A-Z</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                </select>

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

                        {/* Products Grid */}
                        {filteredProducts.length > 0 ? (
                            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-1'}`}>
                                {filteredProducts.map(product => (
                                    <ProductCard key={product.id} product={product} viewMode={viewMode} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-white rounded-lg">
                                <p className="text-gray-500 font-serif text-lg">No products found.</p>
                                <button
                                    onClick={() => setSelectedCategory('all')}
                                    className="mt-4 text-[#8B0000] hover:underline"
                                >
                                    Clear filters
                                </button>
                            </div>
                        )}
                    </main>
                </div>
            </div>

            {/* Mobile Filters Drawer */}
            {showFilters && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setShowFilters(false)} />
                    <div className="absolute right-0 top-0 h-full w-80 bg-white p-6 overflow-y-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-serif text-xl">Filters</h3>
                            <button onClick={() => setShowFilters(false)}>
                                <X size={24} className="text-gray-500" />
                            </button>
                        </div>

                        {/* Categories */}
                        <div className="mb-8">
                            <h4 className="font-medium text-[#1A1A1A] mb-4">Categories</h4>
                            <ul className="space-y-3">
                                <li>
                                    <button
                                        onClick={() => { setSelectedCategory('all'); setShowFilters(false); }}
                                        className={`text-sm ${selectedCategory === 'all' ? 'text-[#8B0000] font-medium' : 'text-gray-600'}`}
                                    >
                                        All Products
                                    </button>
                                </li>
                                {categories.map(cat => (
                                    <li key={cat.id}>
                                        <button
                                            onClick={() => { setSelectedCategory(cat.id); setShowFilters(false); }}
                                            className={`text-sm ${selectedCategory === cat.id ? 'text-[#8B0000] font-medium' : 'text-gray-600'}`}
                                        >
                                            {cat.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllProductsPage;
