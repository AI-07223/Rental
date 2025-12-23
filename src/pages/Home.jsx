// src/pages/Home.jsx
import React from 'react';
import { siteConfig } from '../config';

// Import all section components
import {
  AnnouncementBar,
  HeroCarousel,
  BrandPhilosophy,
  CategoryGrid,
  NewArrivalsCarousel,
  FeaturedCollections,
  CelebrityMuses,
  DesignerQuote,
  Craftsmanship,
  StoreVisit,
  InstagramFeed,
  Newsletter,
  ValuePropositions,
  PressSection
} from '../components/sections';

const Home = () => {
  const { heroSlides, products, categories, featuredCollections, muses } = siteConfig;

  return (
    <div className="min-h-screen">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Hero Carousel - Full Screen */}
      <HeroCarousel slides={heroSlides} />

      {/* Value Propositions - Trust Signals */}
      <ValuePropositions />

      {/* Brand Philosophy - Our Story */}
      <BrandPhilosophy />

      {/* Shop by Category - Visual Grid */}
      <CategoryGrid categories={categories} />

      {/* New Arrivals - Product Carousel */}
      <NewArrivalsCarousel products={products} />

      {/* Featured Collections - Campaign Banners */}
      <FeaturedCollections collections={featuredCollections} />

      {/* Celebrity Muses - Social Proof */}
      <CelebrityMuses muses={muses} />

      {/* Craftsmanship Heritage */}
      <Craftsmanship />

      {/* Designer Quote */}
      <DesignerQuote />

      {/* Store Visit / Appointment */}
      <StoreVisit />

      {/* Instagram Feed */}
      <InstagramFeed />

      {/* Press Section - As Seen In */}
      <PressSection />

      {/* Newsletter Signup */}
      <Newsletter />
    </div>
  );
};

export default Home;
