// src/config.js

export const siteConfig = {
  siteDetails: {
    name: "Mili's Couture",
    logoText: "MILI'S COUTURE",
    logoSubText: "EST. 2024",
    phone: "+91 98765 43210",
    whatsappNumber: "919876543210",
    address: "123 Fashion Street, New Delhi, India",
    email: "contact@miliscouture.com",
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
  },

  theme: {
    colors: {
      primary: "#8B0000",
      secondary: "#D4AF37",
      background: "#FDFBF7",
      text: "#1A1A1A",
      accent: "#5C0A0A",
    },
    fonts: {
      primary: "'Playfair Display', serif",
      secondary: "'Lato', sans-serif",
    }
  },

  heroSlides: [
    {
      title: "Elegance in Every Stitch",
      subtitle: "Bridal Collection 2025",
      description: "Discover our exquisite bridal lehengas, handcrafted with love and tradition.",
      buttonText: "Shop Bridal",
      link: "/category/lehenga",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1920&q=80"
    },
    {
      title: "The Saree Affair",
      subtitle: "Handwoven Heritage",
      description: "Authentic Banarasi and Kanjeevaram sarees for the modern woman.",
      buttonText: "Explore Sarees",
      link: "/category/saree",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=1920&q=80"
    },
    {
      title: "Regal Celebrations",
      subtitle: "Festive Edit",
      description: "Make every occasion memorable with our stunning festive collection.",
      buttonText: "Shop Now",
      link: "/category/gown",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
    }
  ],

  categories: [
    {
      id: "lehenga",
      name: "Lehenga",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80"
    },
    {
      id: "saree",
      name: "Saree",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&q=80"
    },
    {
      id: "gown",
      name: "Gowns",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    },
    {
      id: "tuxedo",
      name: "Tuxedo",
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80"
    },
    {
      id: "sherwani",
      name: "Sherwani",
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80"
    },
    {
      id: "jewellery",
      name: "Jewellery",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    },
  ],

  featuredCollections: [
    {
      id: "bridal",
      title: "The Bridal Edit",
      subtitle: "New Season",
      description: "Where dreams meet reality. Discover our handcrafted bridal lehengas, each piece telling a story of love and tradition.",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1920&q=80",
      link: "/category/lehenga"
    },
    {
      id: "heritage",
      title: "Handwoven in Banaras",
      subtitle: "Artisan Collection",
      description: "Celebrating centuries of weaving heritage. Authentic silk sarees crafted by master artisans.",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=1920&q=80",
      link: "/category/saree"
    }
  ],

  muses: [
    {
      name: "Priya Sharma",
      outfit: "Bridal Pink Lehenga",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80"
    },
    {
      name: "Ananya Patel",
      outfit: "Royal Blue Saree",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80"
    },
    {
      name: "Riya Kapoor",
      outfit: "Floral Gown",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
    },
    {
      name: "Meera Desai",
      outfit: "Maroon Lehenga",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80"
    },
    {
      name: "Sara Khan",
      outfit: "Ivory Saree",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80"
    },
  ],

  products: [
    {
      id: "prod_001",
      name: "Bridal Pink Lehenga",
      price: "₹45,000",
      category: "lehenga",
      images: [
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
        "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80"
      ],
      description: "A stunning hand-embroidered pink lehenga perfect for weddings. Features intricate zari work and a matching blouse.",
      options: {
        Size: ["XS", "S", "M", "L", "XL", "Custom"],
        "Blouse Stitching": ["Unstitched", "Stitched"],
      }
    },
    {
      id: "prod_002",
      name: "Royal Blue Silk Saree",
      price: "₹12,500",
      category: "saree",
      images: [
        "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80",
      ],
      description: "Authentic Banarasi silk saree in royal blue with gold border.",
      options: {
        "Blouse Piece": ["Attached", "Separate"],
      }
    },
    {
      id: "prod_003",
      name: "Classic Black Tuxedo",
      price: "₹18,000",
      category: "tuxedo",
      images: [
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
      ],
      description: "Premium Italian wool tuxedo suit. Includes jacket and trousers.",
      options: {
        Size: ["38", "40", "42", "44"],
        Fit: ["Slim", "Regular"],
      }
    },
    {
      id: "prod_004",
      name: "Floral Evening Gown",
      price: "₹8,500",
      category: "gown",
      images: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      ],
      description: "Elegant floor-length gown with floral prints and soft tulle fabric.",
      options: {
        Size: ["S", "M", "L", "XL"],
        Color: ["Peach", "Mint Green"],
      }
    },
    {
      id: "prod_005",
      name: "Golden Sherwani Set",
      price: "₹25,000",
      category: "sherwani",
      images: [
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
      ],
      description: "Traditional golden sherwani with maroon stole. Perfect for the groom.",
      options: {
        Size: ["38", "40", "42", "44", "Custom"],
      }
    },
    {
      id: "prod_006",
      name: "Kundan Necklace Set",
      price: "₹3,500",
      category: "jewellery",
      images: [
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
      ],
      description: "Artificial Kundan set with earrings and maang tikka.",
      options: {
        Plating: ["Gold", "Rose Gold"],
      }
    }
  ]
};
