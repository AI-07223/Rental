
// src/config.js

export const siteConfig = {
  siteDetails: {
    name: "Mili's Couture",
    logoText: "MILI'S COUTURE",
    logoSubText: "EST. 2024",
    topBarText: "Welcome to India's Premier Rental Boutique - Worldwide Shipping Available",
    phone: "+91 9079289688",
    whatsappNumber: "919079289688",
    address: "90/16, Karma Patel Marg, Mansarovar, Jaipur, Rajasthan 302020",
    email: "dresszilla.jaipur@gmail.com",
    social: {
      instagram: "https://www.instagram.com/dress_zilla",
      facebook: "https://facebook.com",
    },
  },

  theme: {
    colors: {
      primary: "#111111", // Black text for high-end feel
      secondary: "#ffffff",
      accent: "#bfa480", // Gold/Beige accent often seen in luxury
      background: "#ffffff",
      text: "#333333",
      lightGray: "#f9f9f9",
      darkGray: "#222222",
    },
    fonts: {
      primary: "'Playfair Display', serif",
      secondary: "'Lato', sans-serif",
    }
  },

  hero: {
    title: "Curated for the Connoisseur",
    subtitle: "Experience timeless couture for you.",
    buttonText: "Shop Collection",
    // From reference: DRESSZILLA banner? Or the Green/Blue one?
    // Using a high quality one found in the scrape:
    image: "https://dresszilla.in/wp-content/uploads/2025/06/DRESSZILLA-scaled.png",
  },

  banners: {
    rentalBridal: "https://dresszilla.in/wp-content/uploads/2025/06/Green-and-Blue-Simple-Watercolor-Wedding-Invitation-Card-12-scaled.png",
    manOfDistinction: "https://dresszilla.in/wp-content/uploads/2025/06/Green-and-Blue-Simple-Watercolor-Wedding-Invitation-Card-6-scaled.png",
  },

  sections: {
    signature: {
      title: "The Signature Collection",
      subtitle: "An ensemble of heirloom silhouettes and modern classics — crafted for moments destined to become memories."
    },
    story: {
      title: "Our Story",
      text: [
        "At Mili's Couture, we believe luxury shouldn’t come with a lifelong price tag.",
        "Founded with one mission — to make designer fashion accessible to all — we’ve redefined the way India dresses up for its biggest moments.",
        "From heavy bridal lehengas that turn heads, to red carpet–ready gowns and statement menswear that makes grooms shine — we’re your secret to serving unforgettable looks, without ever repeating an outfit.",
        "Every piece in our collection is handpicked, high-fashion, and high-impact — available to rent for a fraction of the retail price."
      ],
      founder: "Madhuri Chetwani",
      images: [
        "https://dresszilla.in/wp-content/uploads/2025/06/IMG_9720-581x1024.jpg",
        "https://dresszilla.in/wp-content/uploads/2025/06/photo-2.jpg"
      ]
    },
    testimonials: [
      {
        text: "From the moment I stepped into Mili's Couture, I knew I wasn’t just renting a lehenga — I was choosing an heirloom. The craftsmanship, the attention to detail, the way the team listened to my story — everything was flawless.",
        author: "Namrita S.",
        role: "My Wedding Day",
        image: "https://dresszilla.in/wp-content/uploads/2025/06/14163-200-150x150.png"
      }
    ]
  },

  categories: [
    { id: "bridal", name: "Bridal Lehengas", image: "https://dresszilla.in/wp-content/uploads/2025/06/IMG_8090-1-300x400.jpg", description: "Regal silhouettes and storied embroidery." },
    { id: "gown", name: "Occasion Gowns", image: "https://dresszilla.in/wp-content/uploads/2025/06/IMG_5396-1-300x375.webp", description: "Statement gowns crafted to dazzle beneath starlit skies." },
    { id: "saree", name: "Statement Sarees", image: "https://dresszilla.in/wp-content/uploads/2025/06/IMG_6026-scaled-300x400.jpg", description: "An ode to India’s artistry — drapes that transcend time." },
    // Adding Men's specific if needed or grouping them
  ],

  products: [
    {
      id: "noor-e-nazaakat",
      name: "Noor-e-Nazaakat Lehenga",
      price: "₹5,000.00",
      category: "bridal",
      images: [
        "https://dresszilla.in/wp-content/uploads/2025/06/IMG_8090-1-300x400.jpg"
      ],
      description: "A stunning hand-embroidered pink lehenga perfect for weddings.",
      options: { Size: ["S", "M", "L"] }
    },
    {
      id: "heritage-weave",
      name: "The Heritage Weave Lehenga",
      price: "₹5,000.00",
      category: "bridal",
      images: [
        "https://dresszilla.in/wp-content/uploads/2025/06/IMG_6026-scaled-300x400.jpg"
      ],
      description: "Traditional craftsmanship with a modern silhouette.",
      options: { Size: ["S", "M", "L"] }
    },
    {
      id: "modern-rajkumari",
      name: "The Modern Rajkumari Lehenga",
      price: "₹5,000.00",
      category: "bridal",
      images: [
        "https://dresszilla.in/wp-content/uploads/2025/06/IMG_5396-1-300x375.webp"
      ],
      description: "Contemporary elegance for the modern bride.",
      options: { Size: ["S", "M", "L"] }
    },
    {
      id: "royal-heirloom",
      name: "The Royal Heirloom Lehenga",
      price: "₹5,000.00",
      category: "bridal",
      images: [
        "https://dresszilla.in/wp-content/uploads/2025/06/IMG_5374-300x348.jpg"
      ],
      description: "A timeless piece inspired by royal archives.",
      options: { Size: ["S", "M", "L"] }
    },
    // New Arrivals
    {
      id: "guldasta",
      name: "Guldasta-e-Riwaayat",
      price: "₹3,000.00",
      originalPrice: "₹5,000.00",
      category: "new-arrivals",
      images: [
        "https://dresszilla.in/wp-content/uploads/2025/06/IMG_4614-scaled-300x450.jpg"
      ],
      description: "Floral elegance at an unbeatable price.",
      options: { Size: ["S", "M", "L"] }
    },
    {
      id: "meher-gulaab",
      name: "Meher-e-Gulaab Lehenga",
      price: "₹5,000.00",
      category: "new-arrivals",
      images: [
        "https://dresszilla.in/wp-content/uploads/2025/06/IMG_1256-scaled-300x400.jpg"
      ],
      description: "Rose pink perfection.",
      options: { Size: ["S", "M", "L"] }
    },
    {
      id: "rani-noor",
      name: "Rani-E-Noor Lehenga",
      price: "₹2,000.00",
      originalPrice: "₹5,000.00",
      category: "new-arrivals",
      images: [
        "https://dresszilla.in/wp-content/uploads/2025/06/IMG_1684-300x375.jpg"
      ],
      description: "A steal for the queen in you.",
      options: { Size: ["S", "M", "L"] }
    },
    {
      id: "zariwaala",
      name: "Zariwaala Mohabbat",
      price: "₹5,000.00",
      category: "new-arrivals",
      images: [
        "https://dresszilla.in/wp-content/uploads/2025/06/IMG_1797-300x371.jpg"
      ],
      description: "Intricate zari work.",
      options: { Size: ["S", "M", "L"] }
    }
  ]
};
