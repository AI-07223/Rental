// src/pages/Blog.jsx
import React from 'react';
import { siteConfig } from '../config';
import { Link } from 'react-router-dom';

const Blog = () => {
  const { blogs } = siteConfig;

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-100 py-16 text-center">
        <h1 className="text-4xl font-serif text-gray-900 tracking-wider uppercase mb-4">
          The Journal
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto px-4">
          Stories of style, heritage, and timeless elegance.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, idx) => (
             <div key={idx} className="group cursor-pointer">
                <div className="overflow-hidden mb-6 h-64 bg-gray-200">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                </div>
                <h2 className="font-serif text-2xl mb-3 leading-tight group-hover:text-[#bfa480] transition-colors">
                    {blog.title}
                </h2>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-3">
                    {blog.excerpt}
                </p>
                <Link to="#" className="text-xs font-bold uppercase tracking-widest border-b border-gray-300 pb-1 group-hover:border-black transition-colors">
                    Read Story
                </Link>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
