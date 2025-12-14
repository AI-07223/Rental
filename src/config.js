
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
      primary: "#F2C1B8",
      secondary: "#ffffff",
      text: "#333333",
      accent: "#D48F84",
    },
    fonts: {
      primary: "'Playfair Display', serif",
      secondary: "'Lato', sans-serif",
    }
  },

  hero: {
    title: "Elegance in Every Stitch",
    subtitle: "Discover the finest collection of Lehengas, Sarees, and Bespoke Couture.",
    buttonText: "Shop Collection",
    image: "https://placehold.co/1920x1080/gray/white?text=Elegant+Fashion+Banner",
  },

  categories: [
    { id: "lehenga", name: "Lehenga", image: "https://placehold.co/800x800/F2C1B8/white?text=Lehenga" },
    { id: "saree", name: "Saree", image: "https://placehold.co/800x800/e0e0e0/333333?text=Saree" },
    { id: "gown", name: "Gowns", image: "https://placehold.co/800x800/F2C1B8/white?text=Gowns" },
    { id: "tuxedo", name: "Tuxedo", image: "https://placehold.co/800x800/333333/white?text=Tuxedo" },
    { id: "sherwani", name: "Sherwani", image: "https://placehold.co/800x800/d4af37/white?text=Sherwani" },
    { id: "jewellery", name: "Jewellery", image: "https://placehold.co/800x800/e0e0e0/333333?text=Jewellery" },
  ],

  products: [
    {
      id: "prod_001",
      name: "Bridal Pink Lehenga",
      price: "₹45,000",
      category: "lehenga",
      images: [
        "https://placehold.co/600x800/F2C1B8/white?text=Pink+Lehenga+Front",
        "https://placehold.co/600x800/F2C1B8/white?text=Pink+Lehenga+Back"
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
        "https://placehold.co/600x800/000080/white?text=Blue+Saree",
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
        "https://placehold.co/600x800/1a1a1a/white?text=Black+Tuxedo",
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
        "https://placehold.co/600x800/FFB6C1/333333?text=Floral+Gown",
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
        "https://placehold.co/600x800/DAA520/white?text=Sherwani",
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
        "https://placehold.co/600x800/FFD700/333333?text=Necklace+Set",
      ],
      description: "Artificial Kundan set with earrings and maang tikka.",
      options: {
        Plating: ["Gold", "Rose Gold"],
      }
    }
  ]
};
